
import { TechNewsClient } from "./_components/tech-news-client";
import { techNewsSources } from "@/data/tech-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function TechNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <TechNewsClient sources={techNewsSources} />
      </div>
    </div>
  );
}
