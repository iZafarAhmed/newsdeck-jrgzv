
import { ParaguayNewsClient } from "./_components/paraguay-news-client";
import { paraguayNewsSources } from "@/data/paraguay-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ParaguayNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ParaguayNewsClient sources={paraguayNewsSources} />
      </div>
    </div>
  );
}
