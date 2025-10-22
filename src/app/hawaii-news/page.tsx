
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HawaiiNewsClient } from "./_components/hawaii-news-client";
import { hawaiiNewsSources } from "@/data/hawaii-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function HawaiiNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <HawaiiNewsClient sources={hawaiiNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
