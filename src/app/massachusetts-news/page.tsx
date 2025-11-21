
import { MassachusettsNewsClient } from "./_components/massachusetts-news-client";
import { massachusettsNewsSources } from "@/data/massachusetts-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MassachusettsNewsPage() {
  return (
        <MassachusettsNewsClient sources={massachusettsNewsSources} />
  );
}
