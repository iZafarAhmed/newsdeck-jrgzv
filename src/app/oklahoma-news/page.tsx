
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OklahomaNewsClient } from "./_components/oklahoma-news-client";
import { oklahomaNewsSources } from "@/data/oklahoma-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function OklahomaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <OklahomaNewsClient sources={oklahomaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
