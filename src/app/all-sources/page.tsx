import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AllSourcesClient } from "./_components/all-sources-client";
import { allNewsSites } from "@/data/all-news-sources";

export default function AllSourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <AllSourcesClient sources={allNewsSites} />
      </div>
      <Footer />
    </div>
  );
}
