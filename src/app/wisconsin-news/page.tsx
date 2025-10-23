
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WisconsinNewsClient } from "./_components/wisconsin-news-client";
import { wisconsinNewsSources } from "@/data/wisconsin-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function WisconsinNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <WisconsinNewsClient sources={wisconsinNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
