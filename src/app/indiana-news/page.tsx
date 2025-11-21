
import { IndianaNewsClient } from "./_components/indiana-news-client";
import { indianaNewsSources } from "@/data/indiana-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function IndianaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <IndianaNewsClient sources={indianaNewsSources} />
      </div>
    </div>
  );
}
