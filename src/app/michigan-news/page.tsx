
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MichiganNewsClient } from "./_components/michigan-news-client";
import { michiganNewsSources } from "@/data/michigan-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MichiganNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MichiganNewsClient sources={michiganNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
