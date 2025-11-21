import { AgricultureNewsClient } from "./_components/agriculture-news-client";
import { agricultureNewsSources } from "@/data/agriculture-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AgricultureNewsPage() {
  return (
    <AgricultureNewsClient sources={agricultureNewsSources} />
  );
}
