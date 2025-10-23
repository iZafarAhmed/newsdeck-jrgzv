
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OregonNewsClient } from "./_components/oregon-news-client";
import { oregonNewsSources } from "@/data/oregon-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function OregonNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <OregonNewsClient sources={oregonNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
