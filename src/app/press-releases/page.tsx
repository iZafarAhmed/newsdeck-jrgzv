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

// Very basic XML parser
function parseXml(xml: string): { [key: string]: any }[] {
  const items: { [key: string]: any }[] = [];
  const itemBlocks = xml.split('<item>').slice(1);

  for (const block of itemBlocks) {
    const item: { [key: string]: any } = {};
    const titleMatch = block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const linkMatch = block.match(/<link>(.*?)<\/link>/);
    const descriptionMatch = block.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/);
    const pubDateMatch = block.match(/<pubDate>(.*?)<\/pubDate>/);

    if (titleMatch && linkMatch && pubDateMatch) {
      item.title = titleMatch[1];
      // GlobeNewswire links are inside CDATA, PRNewswire are not
      const linkCdataMatch = linkMatch[1].match(/<!\[CDATA\[(.*?)\]\]>/);
      item.link = linkCdataMatch ? linkCdataMatch[1] : linkMatch[1];
      
      item.description = descriptionMatch ? descriptionMatch[1].replace(/<[^>]*>?/gm, '') : 'No description available.';
      item.pubDate = pubDateMatch[1];
      items.push(item);
    }
  }
  return items;
}

async function fetchAndParseFeed(
  feed: { name: string; url: string }
): Promise<PressReleaseArticle[]> {
  try {
    const response = await fetch(feed.url, { next: { revalidate: 1800 } });
    if (!response.ok) {
      console.error(`Failed to fetch ${feed.name}: ${response.statusText}`);
      return [];
    }
    const xmlText = await response.text();
    const parsedItems = parseXml(xmlText);

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
