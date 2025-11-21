
import { CryptoNewsClient } from "./_components/crypto-news-client";
import { cryptoNewsSources } from "@/data/crypto-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function CryptoNewsPage() {
  return (
    <CryptoNewsClient sources={cryptoNewsSources} />
  );
}
