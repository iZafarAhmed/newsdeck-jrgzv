
import { AviationNewsClient } from "./_components/aviation-news-client";
import { aviationNewsSources } from "@/data/aviation-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AviationNewsPage() {
  return (
        <AviationNewsClient sources={aviationNewsSources} />
  );
}
