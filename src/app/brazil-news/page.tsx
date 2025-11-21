
import { BrazilNewsClient } from "./_components/brazil-news-client";
import { brazilNewsSources } from "@/data/brazil-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function BrazilNewsPage() {
  return (
        <BrazilNewsClient sources={brazilNewsSources} />
  );
}
