
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { IrishNewsClient } from "./_components/irish-news-client";
import { irishNewsSources } from "@/data/irish-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function IrishNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <IrishNewsClient sources={irishNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
