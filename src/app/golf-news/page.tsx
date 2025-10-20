
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GolfNewsClient } from "./_components/golf-news-client";
import { golfNewsSources } from "@/data/golf-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function GolfNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <GolfNewsClient sources={golfNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
