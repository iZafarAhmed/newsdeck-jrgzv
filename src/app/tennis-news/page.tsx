
import { TennisNewsClient } from "./_components/tennis-news-client";
import { tennisNewsSources } from "@/data/tennis-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function TennisNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <TennisNewsClient sources={tennisNewsSources} />
      </div>
    </div>
  );
}
