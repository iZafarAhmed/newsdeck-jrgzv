
import { LouisianaNewsClient } from "./_components/louisiana-news-client";
import { louisianaNewsSources } from "@/data/louisiana-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function LouisianaNewsPage() {
  return (
        <LouisianaNewsClient sources={louisianaNewsSources} />
  );
}
