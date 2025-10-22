
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { KentuckyNewsClient } from "./_components/kentucky-news-client";
import { kentuckyNewsSources } from "@/data/kentucky-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function KentuckyNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <KentuckyNewsClient sources={kentuckyNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
