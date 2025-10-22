
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { IdahoNewsClient } from "./_components/idaho-news-client";
import { idahoNewsSources } from "@/data/idaho-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function IdahoNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <IdahoNewsClient sources={idahoNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
