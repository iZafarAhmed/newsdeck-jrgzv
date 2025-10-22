
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LouisianaNewsClient } from "./_components/louisiana-news-client";
import { louisianaNewsSources } from "@/data/louisiana-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function LouisianaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <LouisianaNewsClient sources={louisianaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
