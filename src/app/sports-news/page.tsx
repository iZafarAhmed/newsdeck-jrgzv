
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SportsNewsClient } from "./_components/sports-news-client";
import { sportsNewsSources } from "@/data/sports-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function SportsNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <SportsNewsClient sources={sportsNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
