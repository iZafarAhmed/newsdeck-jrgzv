import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NewsCategory } from "@/data/news-data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: NewsCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { Icon, title, color, sources } = category;

  return (
    <Card className="flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-3">
          <Icon className={cn("size-6", color)} />
          {title}
        </CardTitle>
        <Badge variant="secondary">{sources.length} sources</Badge>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <ul className="space-y-1">
          {sources.map((source) => (
            <li key={source.name}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md p-2 -mx-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/20 hover:text-primary"
              >
                <ExternalLink className="size-4 shrink-0" />
                <span className="truncate flex-1">{source.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
