
import { top100NewsData } from "@/data/top-100-news";
import { ExternalLink } from "lucide-react";

const AllSourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All News Sources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {top100NewsData.map((source) => (
          <a
            key={source.name}
            href={source.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-md p-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/20 hover:text-primary shadow-md"
          >
            <span className="truncate flex-1">{source.name}</span>
            <ExternalLink className="size-4 shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AllSourcesPage;
