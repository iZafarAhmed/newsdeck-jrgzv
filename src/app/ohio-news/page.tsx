
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OhioNewsClient } from "./_components/ohio-news-client";
import { ohioNewsSources } from "@/data/ohio-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function OhioNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <OhioNewsClient sources={ohioNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
