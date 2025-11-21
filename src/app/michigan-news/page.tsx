
import { MichiganNewsClient } from "./_components/michigan-news-client";
import { michiganNewsSources } from "@/data/michigan-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MichiganNewsPage() {
  return (
        <MichiganNewsClient sources={michiganNewsSources} />
  );
}
