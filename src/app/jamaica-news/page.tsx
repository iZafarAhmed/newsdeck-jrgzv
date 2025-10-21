
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JamaicaNewsClient } from "./_components/jamaica-news-client";
import { jamaicaNewsSources } from "@/data/jamaica-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function JamaicaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <JamaicaNewsClient sources={jamaicaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
