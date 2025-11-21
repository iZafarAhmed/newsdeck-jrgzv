
import { CanadianNewsClient } from "./_components/canadian-news-client";
import { canadianNewsSources } from "@/data/canadian-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function CanadianNewsPage() {
  return (
        <CanadianNewsClient sources={canadianNewsSources} />
  );
}
