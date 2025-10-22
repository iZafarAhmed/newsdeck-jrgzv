
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { IowaNewsClient } from "./_components/iowa-news-client";
import { iowaNewsSources } from "@/data/iowa-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function IowaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <IowaNewsClient sources={iowaNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
