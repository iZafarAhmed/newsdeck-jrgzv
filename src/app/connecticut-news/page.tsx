
import { ConnecticutNewsClient } from "./_components/connecticut-news-client";
import { connecticutNewsSources } from "@/data/connecticut-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ConnecticutNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <ConnecticutNewsClient sources={connecticutNewsSources} />
      </div>
    </div>
  );
}
