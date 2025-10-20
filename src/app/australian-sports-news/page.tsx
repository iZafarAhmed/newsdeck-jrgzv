
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AustralianSportsNewsClient } from "./_components/australian-sports-news-client";
import { australianSportsNewsSources } from "@/data/australian-sports-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AustralianSportsNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <AustralianSportsNewsClient sources={australianSportsNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
