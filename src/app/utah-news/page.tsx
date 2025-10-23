
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UtahNewsClient } from "./_components/utah-news-client";
import { utahNewsSources } from "@/data/utah-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function UtahNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <UtahNewsClient sources={utahNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
