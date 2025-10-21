
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BrazilNewsClient } from "./_components/brazil-news-client";
import { brazilNewsSources } from "@/data/brazil-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function BrazilNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <BrazilNewsClient sources={brazilNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
