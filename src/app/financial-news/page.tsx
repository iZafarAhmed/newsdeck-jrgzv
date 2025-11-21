
import { FinancialNewsClient } from "./_components/financial-news-client";
import { financialNewsSources } from "@/data/financial-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function FinancialNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <FinancialNewsClient sources={financialNewsSources} />
      </div>
    </div>
  );
}
