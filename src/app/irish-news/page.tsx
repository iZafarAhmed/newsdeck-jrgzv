
import { IrishNewsClient } from "./_components/irish-news-client";
import { irishNewsSources } from "@/data/irish-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function IrishNewsPage() {
  return (
    <IrishNewsClient sources={irishNewsSources} />
  );
}
