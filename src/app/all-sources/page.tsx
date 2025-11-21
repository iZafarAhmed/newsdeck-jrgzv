import { AllSourcesClient } from "./_components/all-sources-client";
import { allNewsSites } from "@/data/all-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AllSourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <AllSourcesClient sources={allNewsSites} />
      </div>
    </div>
  );
}
