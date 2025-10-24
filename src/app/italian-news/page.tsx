
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ItalianNewsClient } from "./_components/italian-news-client";
import { italianNewsSources } from "@/data/italian-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ItalianNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ItalianNewsClient sources={italianNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
