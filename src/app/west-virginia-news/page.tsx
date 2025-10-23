
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WestVirginiaNewsClient } from "./_components/west-virginia-news-client";
import { westVirginiaNewsSources } from "@/data/west-virginia-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function WestVirginiaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <WestVirginiaNewsClient sources={westVirginiaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
