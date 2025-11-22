import { WeatherNewsClient } from "./_components/weather-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function WeatherNewsPage() {
  // Filter sources by country or type based on the page's category
  const sources = allNewsSites.filter(source => 
    (source.country && source.country.toLowerCase() === 'Weather'.toLowerCase()) || 
    (source.type && source.type.toLowerCase() === 'Weather'.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <WeatherNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
