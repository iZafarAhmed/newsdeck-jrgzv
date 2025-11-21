
import { ArabicNewsClient } from "./_components/arabic-news-client";
import { arabicNewsSources } from "@/data/arabic-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ArabicNewsPage() {
  return (
        <ArabicNewsClient sources={arabicNewsSources} />
  );
}
