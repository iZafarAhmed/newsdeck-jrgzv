
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MassachusettsNewsClient } from "./_components/massachusetts-news-client";
import { massachusettsNewsSources } from "@/data/massachusetts-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function MassachusettsNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <MassachusettsNewsClient sources={massachusettsNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
