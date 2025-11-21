
import { ChileNewsClient } from "./_components/chile-news-client";
import { chileNewsSources } from "@/data/chile-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ChileNewsPage() {
  return (
        <ChileNewsClient sources={chileNewsSources} />
  );
}
