
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CaliforniaNewsClient } from "./_components/california-news-client";
import { californiaNewsSources } from "@/data/california-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function CaliforniaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <CaliforniaNewsClient sources={californiaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
