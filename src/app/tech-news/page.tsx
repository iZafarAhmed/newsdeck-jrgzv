
import { TechNewsClient } from "./_components/tech-news-client";
import { techNewsSources } from "@/data/tech-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function TechNewsPage() {
  return (
    <TechNewsClient sources={techNewsSources} />
  );
}
