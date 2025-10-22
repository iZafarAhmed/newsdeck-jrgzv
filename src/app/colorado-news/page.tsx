
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ColoradoNewsClient } from "./_components/colorado-news-client";
import { coloradoNewsSources } from "@/data/colorado-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function ColoradoNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <ColoradoNewsClient sources={coloradoNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
