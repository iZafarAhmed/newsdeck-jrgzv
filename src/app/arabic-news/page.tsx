
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArabicNewsClient } from "./_components/arabic-news-client";
import { arabicNewsSources } from "@/data/arabic-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ArabicNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ArabicNewsClient sources={arabicNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
