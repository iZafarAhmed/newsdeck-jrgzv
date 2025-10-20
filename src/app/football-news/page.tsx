
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FootballNewsClient } from "./_components/football-news-client";
import { footballNewsSources } from "@/data/football-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function FootballNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <FootballNewsClient sources={footballNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
