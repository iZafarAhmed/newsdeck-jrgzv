
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { EnergyNewsClient } from "./_components/energy-news-client";
import { energyNewsSources } from "@/data/energy-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function EnergyNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <EnergyNewsClient sources={energyNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
