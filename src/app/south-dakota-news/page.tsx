
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SouthDakotaNewsClient } from "./_components/south-dakota-news-client";
import { southDakotaNewsSources } from "@/data/south-dakota-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function SouthDakotaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <SouthDakotaNewsClient sources={southDakotaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
