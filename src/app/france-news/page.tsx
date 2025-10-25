
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FranceNewsClient } from "./_components/france-news-client";
import { franceNewsSources } from "@/data/france-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function FranceNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <FranceNewsClient sources={franceNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
