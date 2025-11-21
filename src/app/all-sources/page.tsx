import { AllSourcesClient } from "./_components/all-sources-client";
import { allNewsSites } from "@/data/all-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AllSourcesPage() {
  return (
    <AllSourcesClient sources={allNewsSites} />
  );
}
