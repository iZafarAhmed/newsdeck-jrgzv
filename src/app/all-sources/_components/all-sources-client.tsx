"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink, Search, ArrowUpDown, Facebook, Instagram } from "lucide-react";
import type { AllNewsSource } from "@/data/all-news-sources";
import { Button } from "@/components/ui/button";

interface AllSourcesClientProps {
  sources: AllNewsSource[];
}

type SortableColumn = keyof AllNewsSource | 'facebookFollowers' | 'twitterFollowers' | 'instagramFollowers';

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 512 512"
  >
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);


export function AllSourcesClient({ sources }: AllSourcesClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<SortableColumn>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const parseFollowers = (value: string | undefined): number => {
    if (!value || value === 'N/A') return 0;
    const num = parseFloat(value);
    if (value.toLowerCase().includes('m')) return num * 1_000_000;
    if (value.toLowerCase().includes('k')) return num * 1_000;
    return num;
  };

  const handleSort = (column: SortableColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch (e) {
      return '';
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
        let aValue, bValue;
        
        if (['facebookFollowers', 'twitterFollowers', 'instagramFollowers'].includes(sortColumn)) {
          aValue = parseFollowers(a[sortColumn as keyof AllNewsSource] as string | undefined);
          bValue = parseFollowers(b[sortColumn as keyof AllNewsSource] as string | undefined);
        } else {
          aValue = a[sortColumn as keyof Omit<AllNewsSource, 'facebookFollowers' | 'twitterFollowers' | 'instagramFollowers'>];
          bValue = b[sortColumn as keyof Omit<AllNewsSource, 'facebookFollowers' | 'twitterFollowers' | 'instagramFollowers'>];
        }

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
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('name')} className="px-0 hover:bg-transparent">
                  <span className="text-base font-semibold">Name</span>
                  {renderSortArrow('name')}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('focus')} className="px-0 hover:bg-transparent">
                  <span className="text-base font-semibold">Focus</span>
                  {renderSortArrow('focus')}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('country')} className="px-0 hover:bg-transparent">
                  <span className="text-base font-semibold">Country</span>
                  {renderSortArrow('country')}
                </Button>
              </TableHead>
              <TableHead>
                 <Button variant="ghost" onClick={() => handleSort('facebookFollowers')} className="px-0 hover:bg-transparent flex items-center gap-1">
                  <Facebook className="h-4 w-4 text-[#1877F2]" />
                  <span className="text-base font-semibold">Facebook</span>
                  {renderSortArrow('facebookFollowers')}
                </Button>
              </TableHead>
              <TableHead>
                 <Button variant="ghost" onClick={() => handleSort('twitterFollowers')} className="px-0 hover:bg-transparent flex items-center gap-1">
                  <TwitterIcon />
                  <span className="text-base font-semibold">Twitter</span>
                  {renderSortArrow('twitterFollowers')}
                </Button>
              </TableHead>
               <TableHead>
                 <Button variant="ghost" onClick={() => handleSort('instagramFollowers')} className="px-0 hover:bg-transparent flex items-center gap-1">
                  <Instagram className="h-4 w-4 text-[#E4405F]" />
                  <span className="text-base font-semibold">Instagram</span>
                  {renderSortArrow('instagramFollowers')}
                </Button>
              </TableHead>
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
                    className="flex items-center gap-3 text-primary hover:underline"
                  >
                    <Image
                      src={`https://www.google.com/s2/favicons?domain=${getDomain(source.url)}&sz=32`}
                      alt={`${source.name} logo`}
                      width={16}
                      height={16}
                      className="shrink-0"
                      unoptimized 
                    />
                    <span className="whitespace-nowrap">{source.name}</span>
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground/70" />
                  </a>
                </TableCell>
                <TableCell className="text-muted-foreground">{source.focus}</TableCell>
                <TableCell className="text-muted-foreground">{source.country}</TableCell>
                <TableCell className="text-muted-foreground">{source.facebookFollowers || 'N/A'}</TableCell>
                <TableCell className="text-muted-foreground">{source.twitterFollowers || 'N/A'}</TableCell>
                <TableCell className="text-muted-foreground">{source.instagramFollowers || 'N/A'}</TableCell>
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
    </div>
  );
}
