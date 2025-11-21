
import { MontanaNewsClient } from "./_components/montana-news-client";
import { montanaNewsSources } from "@/data/montana-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MontanaNewsPage() {
  return (
        <MontanaNewsClient sources={montanaNewsSources} />
  );
}
