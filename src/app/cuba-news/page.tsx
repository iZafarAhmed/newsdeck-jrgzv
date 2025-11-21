
import { CubaNewsClient } from "./_components/cuba-news-client";
import { cubaNewsSources } from "@/data/cuba-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function CubaNewsPage() {
  return (
        <CubaNewsClient sources={cubaNewsSources} />
  );
}
