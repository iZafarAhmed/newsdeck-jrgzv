
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ForexNewsClient } from "./_components/forex-news-client";
import { forexNewsSources } from "@/data/forex-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ForexNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <ForexNewsClient sources={forexNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
