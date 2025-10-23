
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TennesseeNewsClient } from "./_components/tennessee-news-client";
import { tennesseeNewsSources } from "@/data/tennessee-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function TennesseeNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <TennesseeNewsClient sources={tennesseeNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
