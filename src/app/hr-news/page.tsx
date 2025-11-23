import { HrNewsClient } from "./_components/hr-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function HrNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Hr'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Hr'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <HrNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
