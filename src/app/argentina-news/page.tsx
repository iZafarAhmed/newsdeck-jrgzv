
import { ArgentinaNewsClient } from "./_components/argentina-news-client";
import { argentinaNewsSources } from "@/data/argentina-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ArgentinaNewsPage() {
  return (
        <ArgentinaNewsClient sources={argentinaNewsSources} />
  );
}
