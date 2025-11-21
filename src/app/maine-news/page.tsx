
import { MaineNewsClient } from "./_components/maine-news-client";
import { maineNewsSources } from "@/data/maine-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MaineNewsPage() {
  return (
        <MaineNewsClient sources={maineNewsSources} />
  );
}
