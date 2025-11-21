
import { ArizonaNewsClient } from "./_components/arizona-news-client";
import { arizonaNewsSources } from "@/data/arizona-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ArizonaNewsPage() {
  return (
        <ArizonaNewsClient sources={arizonaNewsSources} />
  );
}

    