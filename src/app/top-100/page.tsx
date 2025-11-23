
import { Top100Client } from "./_components/top-100-client";
import { top100NewsData } from "@/data/top-100-news";

export const revalidate = 3600; // Revalidate every hour

export default function Top100Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <Top100Client sources={top100NewsData} />
      </div>
    </div>
  );
}
