
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { IllinoisNewsClient } from "./_components/illinois-news-client";
import { illinoisNewsSources } from "@/data/illinois-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function IllinoisNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <IllinoisNewsClient sources={illinoisNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
