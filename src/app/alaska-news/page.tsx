
import { AlaskaNewsClient } from "./_components/alaska-news-client";
import { alaskaNewsSources } from "@/data/alaska-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AlaskaNewsPage() {
  return (
        <AlaskaNewsClient sources={alaskaNewsSources} />
  );
}
