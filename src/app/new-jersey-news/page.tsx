
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NewJerseyNewsClient } from "./_components/new-jersey-news-client";
import { newJerseyNewsSources } from "@/data/new-jersey-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function NewJerseyNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <NewJerseyNewsClient sources={newJerseyNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
