
import { UkraineNewsClient } from "./_components/ukraine-news-client";
import { ukraineNewsSources } from "@/data/ukraine-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function UkraineNewsPage() {
  return (
    <UkraineNewsClient sources={ukraineNewsSources} />
  );
}
