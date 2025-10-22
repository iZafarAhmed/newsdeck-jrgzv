
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MontanaNewsClient } from "./_components/montana-news-client";
import { montanaNewsSources } from "@/data/montana-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MontanaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MontanaNewsClient sources={montanaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
