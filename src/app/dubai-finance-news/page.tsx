
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DubaiFinanceNewsClient } from "./_components/dubai-finance-news-client";
import { dubaiFinanceNewsSources } from "@/data/dubai-finance-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function DubaiFinanceNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <DubaiFinanceNewsClient sources={dubaiFinanceNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
