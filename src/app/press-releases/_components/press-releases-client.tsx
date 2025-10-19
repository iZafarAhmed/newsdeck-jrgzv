"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Search, ExternalLink, Rss } from "lucide-react";
import type { PressReleaseArticle } from "../page";
import { Badge } from "@/components/ui/badge";

interface PressReleasesClientProps {
  articles: PressReleaseArticle[];
}

export function PressReleasesClient({ articles }: PressReleasesClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((article) => {
    if (!searchTerm) return true;
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(lowercasedSearchTerm) ||
      article.description?.toLowerCase().includes(lowercasedSearchTerm) ||
      article.source.toLowerCase().includes(lowercasedSearchTerm)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Press Releases</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Latest press releases from GlobeNewswire and PR Newswire.
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
          <Input
            type="text"
            placeholder="Search press releases..."
            className="w-full h-12 pl-12 pr-4 rounded-full shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline"
                  >
                    {article.title}
                  </a>
                </CardTitle>
                <CardDescription>
                  {new Date(article.pubDate).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {article.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                 <Badge variant={article.source === 'GlobeNewswire' ? 'secondary' : 'outline'}>
                    <Rss className="size-3 mr-1.5" />
                    {article.source}
                 </Badge>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                >
                  Read More <ExternalLink className="size-4" />
                </a>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <h3 className="text-2xl font-semibold text-foreground">
              No Results Found
            </h3>
            <p className="mt-2">Try adjusting your search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
