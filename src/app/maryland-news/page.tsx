
import { MarylandNewsClient } from "./_components/maryland-news-client";
import { marylandNewsSources } from "@/data/maryland-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MarylandNewsPage() {
  return (
        <MarylandNewsClient sources={marylandNewsSources} />
  );
}
