
import { MarketingNewsClient } from "./_components/marketing-news-client";
import { marketingNewsSources } from "@/data/marketing-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MarketingNewsPage() {
  return (
        <MarketingNewsClient sources={marketingNewsSources} />
  );
}
