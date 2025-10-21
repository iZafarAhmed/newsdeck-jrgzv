
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CubaNewsClient } from "./_components/cuba-news-client";
import { cubaNewsSources } from "@/data/cuba-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function CubaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <CubaNewsClient sources={cubaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
