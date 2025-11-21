
import { VenezuelaNewsClient } from "./_components/venezuela-news-client";
import { venezuelaNewsSources } from "@/data/venezuela-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function VenezuelaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <VenezuelaNewsClient sources={venezuelaNewsSources} />
      </div>
    </div>
  );
}
