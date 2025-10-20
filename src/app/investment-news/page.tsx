
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { InvestmentNewsClient } from "./_components/investment-news-client";
import { investmentNewsSources } from "@/data/investment-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function InvestmentNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <InvestmentNewsClient sources={investmentNewsSources} />
      </div>
      <Footer />
    </div>
  );
}

  