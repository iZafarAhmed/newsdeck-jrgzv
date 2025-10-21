
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PhotographyNewsClient } from "./_components/photography-news-client";
import { photographyNewsSources } from "@/data/photography-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function PhotographyNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <PhotographyNewsClient sources={photographyNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
