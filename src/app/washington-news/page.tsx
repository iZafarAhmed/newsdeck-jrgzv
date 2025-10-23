
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WashingtonNewsClient } from "./_components/washington-news-client";
import { washingtonNewsSources } from "@/data/washington-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function WashingtonNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <WashingtonNewsClient sources={washingtonNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
