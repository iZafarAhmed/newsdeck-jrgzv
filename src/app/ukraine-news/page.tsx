import { UkraineNewsClient } from "./_components/ukraine-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function UkraineNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Ukraine'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Ukraine'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <UkraineNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
