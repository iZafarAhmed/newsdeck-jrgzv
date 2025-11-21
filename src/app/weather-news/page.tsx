
import { WeatherNewsClient } from "./_components/weather-news-client";
import { weatherNewsSources } from "@/data/weather-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function WeatherNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <WeatherNewsClient sources={weatherNewsSources} />
      </div>
    </div>
  );
}
