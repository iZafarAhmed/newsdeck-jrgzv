
import { HindiNewsClient } from "./_components/hindi-news-client";
import { hindiNewsSources } from "@/data/hindi-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function HindiNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <HindiNewsClient sources={hindiNewsSources} />
      </div>
    </div>
  );
}
