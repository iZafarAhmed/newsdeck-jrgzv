
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MortgageNewsClient } from "./_components/mortgage-news-client";
import { mortgageNewsSources } from "@/data/mortgage-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MortgageNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MortgageNewsClient sources={mortgageNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
