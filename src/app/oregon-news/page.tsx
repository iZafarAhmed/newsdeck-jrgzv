import { OregonNewsClient } from "./_components/oregon-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function OregonNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Oregon'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Oregon'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <OregonNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
