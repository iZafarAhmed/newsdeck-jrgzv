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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Search, ArrowUpDown, Sparkles, Loader2, Newspaper } from "lucide-react";
import type { AllNewsSource } from "@/data/all-news-sources";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getLatestArticle, type GetLatestArticleOutput } from "@/ai/flows/get-latest-article";
import { useToast } from "@/hooks/use-toast";

interface AllSourcesClientProps {
  sources: AllNewsSource[];
}

type SortableColumn = keyof Omit<AllNewsSource, 'description' | 'url'>;

export function AllSourcesClient({ sources }: AllSourcesClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<SortableColumn>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [isFetching, setIsFetching] = useState(false);
  const [selectedSource, setSelectedSource] = useState<AllNewsSource | null>(null);
  const [latestArticle, setLatestArticle] = useState<GetLatestArticleOutput | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSort = (column: SortableColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  
  const handleGetLatest = async (source: AllNewsSource) => {
    setIsFetching(true);
    setSelectedSource(source);
    setLatestArticle(null);
    setIsDialogOpen(true);

    try {
      const result = await getLatestArticle({ newsSourceUrl: source.url });
      setLatestArticle(result);
    } catch (error) {
      console.error("AI suggestion failed:", error);
      setIsDialogOpen(false);
      toast({
        variant: "destructive",
        title: "Suggestion Failed",
        description: "Could not get an AI suggestion. Please try again later.",
      });
    } finally {
      setIsFetching(false);
    }
  };


  const filteredAndSortedSources = useMemo(() => {
    let filtered = sources;

    if (searchTerm.trim()) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      filtered = sources.filter(
        (source) =>
          source.name.toLowerCase().includes(lowercasedSearchTerm) ||
          source.focus.toLowerCase().includes(lowercasedSearchTerm) ||
          source.country.toLowerCase().includes(lowercasedSearchTerm) ||
          source.description.toLowerCase().includes(lowercasedSearchTerm)
      );
    }
    
    if (sortColumn) {
      const sorted = [...filtered].sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (aValue < bValue) {
          return sortDirection === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
      return sorted;
    }

    return filtered;
  }, [sources, searchTerm, sortColumn, sortDirection]);

  const renderSortArrow = (column: SortableColumn) => {
    if (sortColumn !== column) {
      return <ArrowUpDown className="ml-2 h-4 w-4 text-muted-foreground/50" />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUpDown className="ml-2 h-4 w-4" />
    ) : (
      <ArrowUpDown className="ml-2 h-4 w-4" />
    );
  };

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
            placeholder="Search by name, focus, country, or description..."
            className="w-full h-12 pl-12 pr-4 rounded-full shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-lg border shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-base font-semibold">#</TableHead>
              <TableHead className="w-[200px]">
                <Button variant="ghost" onClick={() => handleSort('name')} className="px-0 hover:bg-transparent">
                  <span className="text-base font-semibold">Name</span>
                  {renderSortArrow('name')}
                </Button>
              </TableHead>
              <TableHead className="w-[120px]">
                <Button variant="ghost" onClick={() => handleSort('focus')} className="px-0 hover:bg-transparent">
                  <span className="text-base font-semibold">Focus</span>
                  {renderSortArrow('focus')}
                </Button>
              </TableHead>
              <TableHead className="w-[120px]">
                <Button variant="ghost" onClick={() => handleSort('country')} className="px-0 hover:bg-transparent">
                  <span className="text-base font-semibold">Country</span>
                  {renderSortArrow('country')}
                </Button>
              </TableHead>
              <TableHead className="text-base font-semibold">Description</TableHead>
              <TableHead className="text-base font-semibold text-center w-[150px]">Latest Article</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedSources.map((source, index) => (
              <TableRow key={source.name} className="hover:bg-muted/50">
                <TableCell className="text-muted-foreground">{index + 1}</TableCell>
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
                <TableCell className="text-muted-foreground">{source.country}</TableCell>
                <TableCell className="text-muted-foreground">{source.description}</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm" onClick={() => handleGetLatest(source)} disabled={isFetching && selectedSource?.name === source.name}>
                    {isFetching && selectedSource?.name === source.name ? 
                      <Loader2 className="animate-spin" /> : 
                      <Sparkles className="mr-2" />
                    }
                    Get Latest
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filteredAndSortedSources.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
              <h3 className="text-2xl font-semibold text-foreground">No Results Found</h3>
              <p className="mt-2">Try adjusting your search term.</p>
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Newspaper className="text-primary"/>
              Latest from {selectedSource?.name}
            </DialogTitle>
            <DialogDescription>
              Our AI assistant has fetched the latest article for you.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {isFetching ? (
              <div className="flex flex-col items-center justify-center gap-4 h-40">
                <Loader2 className="size-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Finding the latest article...</p>
              </div>
            ) : latestArticle ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{latestArticle.articleTitle}</h3>
                <p className="text-muted-foreground text-sm">{latestArticle.reason}</p>
                <Button asChild>
                  <a href={latestArticle.articleUrl} target="_blank" rel="noopener noreferrer">
                    Read Full Article
                    <ExternalLink className="ml-2"/>
                  </a>
                </Button>
              </div>
            ) : (
               <div className="flex flex-col items-center justify-center gap-4 h-40">
                <p className="text-muted-foreground">Could not load article.</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
