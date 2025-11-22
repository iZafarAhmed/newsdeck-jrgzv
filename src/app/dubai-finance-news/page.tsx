import { DubaiFinanceNewsClient } from "./_components/dubai-finance-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function DubaiFinanceNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Dubai Finance'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Dubai Finance'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <DubaiFinanceNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
