
import { AustralianSportsNewsClient } from "./_components/australian-sports-news-client";
import { australianSportsNewsSources } from "@/data/australian-sports-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AustralianSportsNewsPage() {
  return (
        <AustralianSportsNewsClient sources={australianSportsNewsSources} />
  );
}
