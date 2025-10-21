
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TrinidadAndTobagoNewsClient } from "./_components/trinidad-and-tobago-news-client";
import { trinidadAndTobagoNewsSources } from "@/data/trinidad-and-tobago-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function TrinidadAndTobagoNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <TrinidadAndTobagoNewsClient sources={trinidadAndTobagoNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
