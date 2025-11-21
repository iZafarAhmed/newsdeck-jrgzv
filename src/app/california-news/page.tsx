
import { CaliforniaNewsClient } from "./_components/california-news-client";
import { californiaNewsSources } from "@/data/california-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function CaliforniaNewsPage() {
  return (
        <CaliforniaNewsClient sources={californiaNewsSources} />
  );
}
