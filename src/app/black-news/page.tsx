
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlackNewsClient } from "./_components/black-news-client";
import { blackNewsSources } from "@/data/black-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function BlackNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <BlackNewsClient sources={blackNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
