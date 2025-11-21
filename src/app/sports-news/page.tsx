
import { SportsNewsClient } from "./_components/sports-news-client";
import { sportsNewsSources } from "@/data/sports-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function SportsNewsPage() {
  return (
    <SportsNewsClient sources={sportsNewsSources} />
  );
}
