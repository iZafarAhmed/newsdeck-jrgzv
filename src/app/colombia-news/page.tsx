
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ColombiaNewsClient } from "./_components/colombia-news-client";
import { colombiaNewsSources } from "@/data/colombia-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ColombiaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ColombiaNewsClient sources={colombiaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
