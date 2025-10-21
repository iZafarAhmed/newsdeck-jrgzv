
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PeruNewsClient } from "./_components/peru-news-client";
import { peruNewsSources } from "@/data/peru-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function PeruNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <PeruNewsClient sources={peruNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
