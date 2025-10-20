
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StockMarketNewsClient } from "./_components/stock-market-news-client";
import { stockMarketNewsSources } from "@/data/stock-market-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function StockMarketNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <StockMarketNewsClient sources={stockMarketNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
