
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PennsylvaniaNewsClient } from "./_components/pennsylvania-news-client";
import { pennsylvaniaNewsSources } from "@/data/pennsylvania-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function PennsylvaniaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <PennsylvaniaNewsClient sources={pennsylvaniaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
