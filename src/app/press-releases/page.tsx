
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PressReleasesClient } from "./_components/press-releases-client";
import { pressReleaseFeeds } from "@/data/press-release-feeds";

export const revalidate = 1800; // Revalidate every 30 minutes

export interface PressReleaseArticle {
  title: string;
  link: string;
  description: string | null;
  pubDate: string;
  source: string;
}

// More robust XML parser
function parseXml(xml: string): { [key: string]: any }[] {
  const items: { [key: string]: any }[] = [];
  const itemBlocks = xml.split(/<item>|<\/item>/).filter(block => block.trim().length > 0 && block.includes('<title>'));

  const extractContent = (block: string, tagName: string): string | null => {
    const tagRegex = new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`);
    const match = block.match(tagRegex);
    if (!match || !match[1]) return null;

    const content = match[1].trim();
    const cdataMatch = content.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
    return cdataMatch ? cdataMatch[1].trim() : content;
  };

  for (const block of itemBlocks) {
    const item: { [key: string]: any } = {};
    const title = extractContent(block, 'title');
    const link = extractContent(block, 'link');
    const description = extractContent(block, 'description');
    const pubDate = extractContent(block, 'pubDate');

    if (title && link && pubDate) {
      item.title = title;
      item.link = link;
      item.description = description ? description.replace(/<[^>]*>?/gm, '') : 'No description available.';
      item.pubDate = pubDate;
      items.push(item);
    }
  }
  return items;
}


async function fetchAndParseFeed(
  feed: { name: string; url: string }
): Promise<PressReleaseArticle[]> {
  try {
    const response = await fetch(feed.url, { 
      next: { revalidate: 1800 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    if (!response.ok) {
      console.error(`Failed to fetch ${feed.name}: ${response.statusText}`);
      return [];
    }
    const xmlText = await response.text();
    const parsedItems = parseXml(xmlText);
    
    if (parsedItems.length === 0) {
        console.error(`Parsing failed for ${feed.name}. No items found.`);
        return [];
    }

    return parsedItems.map((item) => ({
      title: item.title,
      link: item.link,
      description: item.description,
      pubDate: item.pubDate,
      source: feed.name,
    }));
  } catch (error) {
    console.error(`Error processing feed ${feed.name}:`, error);
    return [];
  }
}

export default async function PressReleasesPage() {
  const allArticles = await Promise.all(
    pressReleaseFeeds.map(fetchAndParseFeed)
  );

  const combinedAndSortedArticles = allArticles
    .flat()
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <PressReleasesClient articles={combinedAndSortedArticles} />
      </div>
      <Footer />
    </div>
  );
}
