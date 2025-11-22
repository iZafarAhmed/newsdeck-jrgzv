import { BrazilNewsClient } from "./_components/brazil-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function BrazilNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Brazil'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Brazil'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <BrazilNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
