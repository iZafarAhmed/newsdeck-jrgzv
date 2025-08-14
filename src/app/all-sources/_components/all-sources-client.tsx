"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink, Search } from "lucide-react";
import type { AllNewsSource } from "@/data/all-news-sources";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AllSourcesClientProps {
  sources: AllNewsSource[];
}

export function AllSourcesClient({ sources }: AllSourcesClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSources = useMemo(() => {
    if (!searchTerm.trim()) {
      return sources;
    }
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return sources.filter(
      (source) =>
        source.name.toLowerCase().includes(lowercasedSearchTerm) ||
        source.focus.toLowerCase().includes(lowercasedSearchTerm)
    );
  }, [sources, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">All News Sources</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Discover a wide variety of news sources from around the world.
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
          <Input
            type="text"
            placeholder="Search by name or focus..."
            className="w-full h-12 pl-12 pr-4 rounded-full shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <ScrollArea className="h-[600px] rounded-lg border shadow-md">
        <Table>
          <TableHeader className="sticky top-0 bg-card z-10">
            <TableRow>
              <TableHead className="w-[300px] text-base font-semibold">Name</TableHead>
              <TableHead className="text-base font-semibold">Focus</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSources.map((source, index) => (
              <TableRow key={index} className="hover:bg-muted/50">
                <TableCell className="font-medium">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    {source.name}
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
                  </a>
                </TableCell>
                <TableCell className="text-muted-foreground">{source.focus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
      {filteredSources.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
            <h3 className="text-2xl font-semibold text-foreground">No Results Found</h3>
            <p className="mt-2">Try adjusting your search term.</p>
        </div>
      )}
    </div>
  );
}
