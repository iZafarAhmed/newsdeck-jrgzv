
import { ForexNewsClient } from "./_components/forex-news-client";
import { forexNewsSources } from "@/data/forex-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ForexNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <ForexNewsClient sources={forexNewsSources} />
      </div>
    </div>
  );
}
