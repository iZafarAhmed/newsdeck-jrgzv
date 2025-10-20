
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UKSportsNewsClient } from "./_components/uk-sports-news-client";
import { ukSportsNewsSources } from "@/data/uk-sports-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function UKSportsNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-grow">
        <UKSportsNewsClient sources={ukSportsNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
