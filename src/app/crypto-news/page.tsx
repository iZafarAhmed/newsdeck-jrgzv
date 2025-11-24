
import { CryptoNewsClient } from "./_components/crypto-news-client";
import { allNewsSites } from "@/data/all-news-sources";
import { NewsSite } from "@/data/all-news-sources";

export default function CryptoNewsPage() {
  // Filter sources by category
  const sources = allNewsSites.filter(source =>
    source.category && source.category.toLowerCase() === 'cryptocurrency'
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <CryptoNewsClient sources={sources as NewsSite[]} />
      </div>
    </div>
  );
}
