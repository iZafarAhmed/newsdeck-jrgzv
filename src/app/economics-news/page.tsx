
import { EconomicsNewsClient } from "./_components/economics-news-client";
import { economicsNewsSources } from "@/data/economics-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function EconomicsNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <EconomicsNewsClient sources={economicsNewsSources} />
      </div>
    </div>
  );
}
