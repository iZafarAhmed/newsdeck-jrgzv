
import { BusinessNewsClient } from "./_components/business-news-client";
import { businessNewsSources } from "@/data/business-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function BusinessNewsPage() {
  return (
    <BusinessNewsClient sources={businessNewsSources} />
  );
}
