
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NewHampshireNewsClient } from "./_components/new-hampshire-news-client";
import { newHampshireNewsSources } from "@/data/new-hampshire-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function NewHampshireNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <NewHampshireNewsClient sources={newHampshireNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
