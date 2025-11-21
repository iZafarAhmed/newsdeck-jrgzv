
import { ColoradoNewsClient } from "./_components/colorado-news-client";
import { coloradoNewsSources } from "@/data/colorado-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ColoradoNewsPage() {
  return (
        <ColoradoNewsClient sources={coloradoNewsSources} />
  );
}
