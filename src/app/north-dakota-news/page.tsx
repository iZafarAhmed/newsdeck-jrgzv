import { NorthDakotaNewsClient } from "./_components/north-dakota-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function NorthDakotaNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'North Dakota'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'North Dakota'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <NorthDakotaNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
