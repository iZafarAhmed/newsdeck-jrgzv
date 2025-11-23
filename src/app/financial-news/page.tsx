import { FinancialNewsClient } from "./_components/financial-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function FinancialNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Financial'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Financial'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <FinancialNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
