
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BasketballNewsClient } from "./_components/basketball-news-client";
import { basketballNewsSources } from "@/data/basketball-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function BasketballNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <BasketballNewsClient sources={basketballNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
