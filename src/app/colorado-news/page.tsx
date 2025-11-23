import { ColoradoNewsClient } from "./_components/colorado-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function ColoradoNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Colorado'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Colorado'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ColoradoNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
