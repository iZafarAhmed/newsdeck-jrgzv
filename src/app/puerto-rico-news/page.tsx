
import { PuertoRicoNewsClient } from "./_components/puerto-rico-news-client";
import { puertoRicoNewsSources } from "@/data/puerto-rico-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function PuertoRicoNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <PuertoRicoNewsClient sources={puertoRicoNewsSources} />
      </div>
    </div>
  );
}
