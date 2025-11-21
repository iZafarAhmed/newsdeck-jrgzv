
import { MississippiNewsClient } from "./_components/mississippi-news-client";
import { mississippiNewsSources } from "@/data/mississippi-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MississippiNewsPage() {
  return (
        <MississippiNewsClient sources={mississippiNewsSources} />
  );
}
