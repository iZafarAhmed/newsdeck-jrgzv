
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WrestlingNewsClient } from "./_components/wrestling-news-client";
import { wrestlingNewsSources } from "@/data/wrestling-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function WrestlingNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <WrestlingNewsClient sources={wrestlingNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
