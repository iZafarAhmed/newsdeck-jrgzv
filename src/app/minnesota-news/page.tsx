
import { MinnesotaNewsClient } from "./_components/minnesota-news-client";
import { minnesotaNewsSources } from "@/data/minnesota-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MinnesotaNewsPage() {
  return (
        <MinnesotaNewsClient sources={minnesotaNewsSources} />
  );
}
