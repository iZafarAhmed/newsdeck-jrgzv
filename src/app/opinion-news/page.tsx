
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OpinionNewsClient } from "./_components/opinion-news-client";
import { opinionNewsSources } from "@/data/opinion-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function OpinionNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <OpinionNewsClient sources={opinionNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
