import { AllSourcesClient } from "./_components/all-sources-client";
import { allNewsSites } from "@/data/all-news-sources";

export default function AllSourcesPage() {
  return (
    <AllSourcesClient sources={allNewsSites} />
  );
}
