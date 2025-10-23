
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NorthDakotaNewsClient } from "./_components/north-dakota-news-client";
import { northDakotaNewsSources } from "@/data/north-dakota-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function NorthDakotaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <NorthDakotaNewsClient sources={northDakotaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
