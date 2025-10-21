
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CryptoNewsClient } from "./_components/crypto-news-client";
import { cryptoNewsSources } from "@/data/crypto-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function CryptoNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <Header />
      <div className="flex-grow">
        <CryptoNewsClient sources={cryptoNewsSources} />
      </div>
      <Footer />
    </div>
  );
}
