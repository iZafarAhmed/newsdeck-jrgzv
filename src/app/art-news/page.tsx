
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArtNewsClient } from "./_components/art-news-client";
import { artNewsSources } from "@/data/art-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ArtNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ArtNewsClient sources={artNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
