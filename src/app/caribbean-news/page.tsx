
import { CaribbeanNewsClient } from "./_components/caribbean-news-client";
import { caribbeanNewsSources } from "@/data/caribbean-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function CaribbeanNewsPage() {
  return (
        <CaribbeanNewsClient sources={caribbeanNewsSources} />
  );
}
