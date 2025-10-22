
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloridaNewsClient } from "./_components/florida-news-client";
import { floridaNewsSources } from "@/data/florida-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function FloridaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <FloridaNewsClient sources={floridaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
