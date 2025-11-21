
import { MexicanNewsClient } from "./_components/mexican-news-client";
import { mexicanNewsSources } from "@/data/mexican-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MexicanNewsPage() {
  return (
        <MexicanNewsClient sources={mexicanNewsSources} />
  );
}
