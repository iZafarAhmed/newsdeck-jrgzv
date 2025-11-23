import { InvestmentNewsClient } from "./_components/investment-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function InvestmentNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Investment'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Investment'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <InvestmentNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
