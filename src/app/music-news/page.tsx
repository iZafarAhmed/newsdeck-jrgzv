
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MusicNewsClient } from "./_components/music-news-client";
import { musicNewsSources } from "@/data/music-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MusicNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MusicNewsClient sources={musicNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
