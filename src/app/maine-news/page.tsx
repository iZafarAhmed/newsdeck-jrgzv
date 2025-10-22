
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MaineNewsClient } from "./_components/maine-news-client";
import { maineNewsSources } from "@/data/maine-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MaineNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MaineNewsClient sources={maineNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
