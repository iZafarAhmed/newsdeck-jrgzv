
import { FashionNewsClient } from "./_components/fashion-news-client";
import { fashionNewsSources } from "@/data/fashion-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function FashionNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <FashionNewsClient sources={fashionNewsSources} />
      </div>
    </div>
  );
}
