
import { FoodNewsClient } from "./_components/food-news-client";
import { foodNewsSources } from "@/data/food-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function FoodNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <FoodNewsClient sources={foodNewsSources} />
      </div>
    </div>
  );
}
