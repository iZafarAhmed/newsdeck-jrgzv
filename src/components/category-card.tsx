
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NewsCategory } from "@/data/news-data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: NewsCategory;
}

const getDomain = (url: string) => {
  try {
    return new URL(url).hostname;
  } catch (e) {
    return '';
  }
};

export function CategoryCard({ category }: CategoryCardProps) {
  const { icon: Icon, title, color, sources, url } = category;

  return (
    <Card className="flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-4 border-b">
        <CardTitle className="text-xl font-bold flex items-center gap-3">
          {Icon && <Icon className={cn("size-6", color)} />}
          {url ? (
            <Link href={url} className="hover:underline flex items-center gap-2 group">
                {title}
                <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ) : (
            title
          )}
        </CardTitle>
        <Badge variant="secondary">{sources.length} sources</Badge>
      </CardHeader>
      <CardContent className="flex-grow pt-4">
        <ul className="space-y-1">
          {sources.map((source) => (
             <li key={source.name}>
             <a
               href={source.url}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-3 rounded-md p-2 -mx-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/20 hover:text-primary"
             >
               <Image
                 src={`https://www.google.com/s2/favicons?domain=${getDomain(source.url)}&sz=32`}
                 alt={`${source.name} logo`}
                 width={16}
                 height={16}
                 className="shrink-0 rounded-sm"
               />
               <span className="truncate flex-1">{source.name}</span>
               <ExternalLink className="size-4 shrink-0" />
             </a>
           </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
