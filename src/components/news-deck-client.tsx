"use client";

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Sparkles, Loader2 } from 'lucide-react';
import { CategoryCard } from './category-card';
import { newsCategories, filterButtons, allNewsSources } from '@/data/news-data';
import type { NewsCategory } from '@/data/news-data';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useToast } from "@/hooks/use-toast";
import { suggestArticle } from '@/ai/flows/suggest-article';

export function NewsDeckClient() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSuggesting, setIsSuggesting] = useState(false);
  const { toast } = useToast();

  const filteredCategories = useMemo(() => {
    const categoriesAfterFilter = newsCategories.filter(category => {
      if (activeFilter === 'all') return true;
      return category.id === activeFilter;
    });

    if (!searchTerm.trim()) {
      return categoriesAfterFilter;
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();

    return categoriesAfterFilter.reduce((acc, category) => {
        const titleMatches = category.title.toLowerCase().includes(lowercasedSearchTerm);
        const matchingSources = category.sources.filter(source => 
            source.name.toLowerCase().includes(lowercasedSearchTerm)
        );

        if (titleMatches || matchingSources.length > 0) {
            acc.push({
                ...category,
                sources: titleMatches && matchingSources.length === 0 ? category.sources : matchingSources
            });
        }
        return acc;
    }, [] as NewsCategory[]);
  }, [activeFilter, searchTerm]);
  
  const handleSuggestArticle = async () => {
    setIsSuggesting(true);
    try {
      const result = await suggestArticle({
        searchQuery: searchTerm || 'general interest',
        filterCategory: activeFilter,
        newsSources: allNewsSources,
      });

      toast({
        title: "AI Article Suggestion",
        description: `Read: ${result.title} - ${result.url}`,
        duration: 9000,
      });
    } catch (error) {
      console.error("AI suggestion failed:", error);
      toast({
        variant: "destructive",
        title: "Suggestion Failed",
        description: "Could not get an AI suggestion. Please try again later.",
      });
    } finally {
      setIsSuggesting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 pt-6">
      <div className="max-w-2xl mx-auto my-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
          <Input
            type="text"
            placeholder="Search news sources..."
            className="w-full h-14 pl-12 pr-40 rounded-full shadow-lg text-base border ring-2 ring-primary focus-visible:ring-primary/80"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button 
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 px-4"
            onClick={handleSuggestArticle}
            disabled={isSuggesting}
          >
            {isSuggesting ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Sparkles className="mr-2" />
            )}
            Suggest
          </Button>
        </div>
      </div>
      
      <div className="my-8">
        <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex justify-center gap-2 pb-4">
                {filterButtons.map((filter) => (
                    <Button
                        key={filter.id}
                        variant={activeFilter === filter.id ? 'default' : 'outline'}
                        className="rounded-full"
                        onClick={() => setActiveFilter(filter.id)}
                    >
                        {filter.label}
                    </Button>
                ))}
            </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <main>
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in-50">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <h3 className="text-2xl font-semibold text-foreground">No Results Found</h3>
            <p className="mt-2">Try adjusting your search or filter.</p>
          </div>
        )}
      </main>
    </div>
  );
}
