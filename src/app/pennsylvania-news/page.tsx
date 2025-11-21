
import { PennsylvaniaNewsClient } from "./_components/pennsylvania-news-client";
import { pennsylvaniaNewsSources } from "@/data/pennsylvania-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function PennsylvaniaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <PennsylvaniaNewsClient sources={pennsylvaniaNewsSources} />
      </div>
    </div>
  );
}
