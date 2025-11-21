
import { IowaNewsClient } from "./_components/iowa-news-client";
import { iowaNewsSources } from "@/data/iowa-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function IowaNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <IowaNewsClient sources={iowaNewsSources} />
      </div>
    </div>
  );
}
