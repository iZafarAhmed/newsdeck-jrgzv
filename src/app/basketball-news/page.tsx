
import { BasketballNewsClient } from "./_components/basketball-news-client";
import { basketballNewsSources } from "@/data/basketball-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function BasketballNewsPage() {
  return (
        <BasketballNewsClient sources={basketballNewsSources} />
  );
}
