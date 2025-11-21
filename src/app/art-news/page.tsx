
import { ArtNewsClient } from "./_components/art-news-client";
import { artNewsSources } from "@/data/art-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ArtNewsPage() {
  return (
        <ArtNewsClient sources={artNewsSources} />
  );
}
