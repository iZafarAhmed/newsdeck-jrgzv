
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HindiNewsClient } from "./_components/hindi-news-client";
import { hindiNewsSources } from "@/data/hindi-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function HindiNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <HindiNewsClient sources={hindiNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
