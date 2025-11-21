
import { ArkansasNewsClient } from "./_components/arkansas-news-client";
import { arkansasNewsSources } from "@/data/arkansas-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ArkansasNewsPage() {
  return (
        <ArkansasNewsClient sources={arkansasNewsSources} />
  );
}
