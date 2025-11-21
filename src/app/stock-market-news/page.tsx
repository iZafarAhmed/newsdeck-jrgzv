
import { StockMarketNewsClient } from "./_components/stock-market-news-client";
import { stockMarketNewsSources } from "@/data/stock-market-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function StockMarketNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <StockMarketNewsClient sources={stockMarketNewsSources} />
      </div>
    </div>
  );
}
