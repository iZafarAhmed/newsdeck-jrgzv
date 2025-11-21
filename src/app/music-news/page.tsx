
import { MusicNewsClient } from "./_components/music-news-client";
import { musicNewsSources } from "@/data/music-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MusicNewsPage() {
  return (
        <MusicNewsClient sources={musicNewsSources} />
  );
}
