
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RussianNewsClient } from "./_components/russian-news-client";
import { russianNewsSources } from "@/data/russian-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function RussianNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <RussianNewsClient sources={russianNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
