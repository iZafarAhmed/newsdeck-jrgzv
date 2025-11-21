
import { NewMexicoNewsClient } from "./_components/new-mexico-news-client";
import { newMexicoNewsSources } from "@/data/new-mexico-news-sources";

export const revalidate = 3600; // Revalidate every hour

export default function NewMexicoNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background">
      <div className="flex-grow">
        <NewMexicoNewsClient sources={newMexicoNewsSources} />
      </div>
    </div>
  );
}
