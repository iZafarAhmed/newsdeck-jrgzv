
import { TennesseeNewsClient } from "./_components/tennessee-news-client";
import { tennesseeNewsSources } from "@/data/tennessee-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function TennesseeNewsPage() {
  return (
    <TennesseeNewsClient sources={tennesseeNewsSources} />
  );
}
