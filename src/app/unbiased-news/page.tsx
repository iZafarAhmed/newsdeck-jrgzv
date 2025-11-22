import { UnbiasedNewsClient } from "./_components/unbiased-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function UnbiasedNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Unbiased'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Unbiased'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <UnbiasedNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
