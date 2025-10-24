
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UKNewsClient } from "./_components/uk-news-client";
import { ukNewsSources } from "@/data/uk-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function UKNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <UKNewsClient sources={ukNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
