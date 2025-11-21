
import { ColombiaNewsClient } from "./_components/colombia-news-client";
import { colombiaNewsSources } from "@/data/colombia-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ColombiaNewsPage() {
  return (
        <ColombiaNewsClient sources={colombiaNewsSources} />
  );
}
