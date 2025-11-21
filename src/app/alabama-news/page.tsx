
import { AlabamaNewsClient } from "./_components/alabama-news-client";
import { alabamaNewsSources } from "@/data/alabama-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AlabamaNewsPage() {
  return (
        <AlabamaNewsClient sources={alabamaNewsSources} />
  );
}
