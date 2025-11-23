import { MassachusettsNewsClient } from "./_components/massachusetts-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function MassachusettsNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Massachusetts'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Massachusetts'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <MassachusettsNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
