
import { GolfNewsClient } from "./_components/golf-news-client";
import { golfNewsSources } from "@/data/golf-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function GolfNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <GolfNewsClient sources={golfNewsSources} />
      </div>
    </div>
  );
}
