
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArizonaNewsClient } from "./_components/arizona-news-client";
import { arizonaNewsSources } from "@/data/arizona-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ArizonaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ArizonaNewsClient sources={arizonaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}

    