
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArgentinaNewsClient } from "./_components/argentina-news-client";
import { argentinaNewsSources } from "@/data/argentina-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ArgentinaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ArgentinaNewsClient sources={argentinaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
