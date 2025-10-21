
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AlaskaNewsClient } from "./_components/alaska-news-client";
import { alaskaNewsSources } from "@/data/alaska-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function AlaskaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <AlaskaNewsClient sources={alaskaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
