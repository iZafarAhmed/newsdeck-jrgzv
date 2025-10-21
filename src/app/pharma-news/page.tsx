
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PharmaNewsClient } from "./_components/pharma-news-client";
import { pharmaNewsSources } from "@/data/pharma-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function PharmaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <PharmaNewsClient sources={pharmaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
