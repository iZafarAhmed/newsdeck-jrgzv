
import { CyclingNewsClient } from "./_components/cycling-news-client";
import { cyclingNewsSources } from "@/data/cycling-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function CyclingNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <CyclingNewsClient sources={cyclingNewsSources} />
      </div>
    </div>
  );
}
