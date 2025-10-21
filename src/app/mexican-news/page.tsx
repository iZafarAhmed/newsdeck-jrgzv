
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MexicanNewsClient } from "./_components/mexican-news-client";
import { mexicanNewsSources } from "@/data/mexican-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MexicanNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MexicanNewsClient sources={mexicanNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
