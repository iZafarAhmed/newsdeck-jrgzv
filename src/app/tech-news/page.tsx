
import { TechNewsClient } from "./_components/tech-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function TechNewsPage() {
  // Filter sources by category
  const sources = allNewsSites.filter(source => 
    source.category && source.category.toLowerCase() === 'technology'
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <TechNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
