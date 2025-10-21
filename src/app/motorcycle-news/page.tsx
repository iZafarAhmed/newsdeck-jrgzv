
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotorcycleNewsClient } from "./_components/motorcycle-news-client";
import { motorcycleNewsSources } from "@/data/motorcycle-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MotorcycleNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MotorcycleNewsClient sources={motorcycleNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
