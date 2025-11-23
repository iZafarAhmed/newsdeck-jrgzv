import { PhotographyNewsClient } from "./_components/photography-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function PhotographyNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Photography'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Photography'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <PhotographyNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
