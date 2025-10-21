
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HRNewsClient } from "./_components/hr-news-client";
import { hrNewsSources } from "@/data/hr-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function HRNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <HRNewsClient sources={hrNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
