
import { ClimateNewsClient } from "./_components/climate-news-client";
import { climateNewsSources } from "@/data/climate-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ClimateNewsPage() {
  return (
        <ClimateNewsClient sources={climateNewsSources} />
  );
}
