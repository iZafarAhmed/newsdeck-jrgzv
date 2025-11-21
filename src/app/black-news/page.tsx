
import { BlackNewsClient } from "./_components/black-news-client";
import { blackNewsSources } from "@/data/black-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function BlackNewsPage() {
  return (
        <BlackNewsClient sources={blackNewsSources} />
  );
}
