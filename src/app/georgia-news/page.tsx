
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GeorgiaNewsClient } from "./_components/georgia-news-client";
import { georgiaNewsSources } from "@/data/georgia-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function GeorgiaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <GeorgiaNewsClient sources={georgiaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
