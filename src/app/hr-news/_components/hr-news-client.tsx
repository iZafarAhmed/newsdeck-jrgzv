
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
import { Search, ArrowUpDown, Facebook, Instagram } from "lucide-react";
import type { AllNewsSource as HRNewsSource } from "@/data/all-news-sources";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HRNewsClientProps {
  sources: HRNewsSource[];
}

type SortableColumn = keyof HRNewsSource;

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

const parseFollowers = (value: string | undefined | null): number => {
  if (!value || value === 'N/A') return 0;
  const num = parseFloat(value.replace(/,/g, ''));
  if (value.toLowerCase().includes('m')) return num * 1_000_000;
  if (value.toLowerCase().includes('k')) return num * 1_000;
  return num;
};

const getTotalFollowers = (source: HRNewsSource) => {
    return parseFollowers(source.facebookFollowers) + parseFollowers(source.xFollowers) + parseFollowers(source.instagramFollowers);
}

export function HrNewsClient({ sources }: HRNewsClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<SortableColumn>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (column: SortableColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getDomain = (url: string | null) => {
    try {
      if (!url || !url.startsWith('http')) return 'example.com';
      return new URL(url).hostname;
    } catch (e) {
      return 'example.com';
    }
  };

  const mostPopularSource = useMemo(() => {
    if (sources.length === 0) return null;
    return sources.reduce((max, source) => getTotalFollowers(source) > getTotalFollowers(max) ? source : max, sources[0]);
  }, [sources]);

  const filteredAndSortedSources = useMemo(() => {
    let filtered = sources;

    if (searchTerm.trim()) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      filtered = sources.filter(
        (source) =>
          source.name.toLowerCase().includes(lowercasedSearchTerm) ||
          source.description.toLowerCase().includes(lowercasedSearchTerm) ||
          (source.type && source.type.toLowerCase().includes(lowercasedSearchTerm)) ||
          (source.country && source.country.toLowerCase().includes(lowercasedSearchTerm))
      );
    }
    
    const sorted = [...filtered].sort((a, b) => {
      let aValue, bValue;
      
      if (['facebookFollowers', 'xFollowers', 'instagramFollowers'].includes(sortColumn)) {
          aValue = parseFollowers(a[sortColumn as 'facebookFollowers' | 'xFollowers' | 'instagramFollowers']);
          bValue = parseFollowers(b[sortColumn as 'facebookFollowers' | 'xFollowers' | 'instagramFollowers']);
      } else {
        aValue = a[sortColumn as keyof Omit<HRNewsSource, 'facebookFollowers' | 'xFollowers' | 'instagramFollowers' | 'facebookUrl' | 'xUrl' | 'instagramUrl' | 'country' >] ?? '';
        bValue = b[sortColumn as keyof Omit<HRNewsSource, 'facebookFollowers' | 'xFollowers' | 'instagramFollowers' | 'facebookUrl' | 'xUrl' | 'instagramUrl' | 'country' >] ?? '';
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
        <h1 className="text-4xl font-bold tracking-tight">HR News Websites</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Explore top HR news sources from around the world.
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
          <Input
            type="text"
            placeholder="Search by name, description, type, or country..."
            className="w-full h-12 pl-12 pr-4 rounded-full shadow-md border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-lg border shadow-md">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-[50px] text-base font-semibold">#</TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('name')} className="px-0 hover:bg-transparent">
                  <span className="text-base font-semibold">Website</span>
                  {renderSortArrow('name')}
                </Button>
              </TableHead>
               <TableHead>
                <Button variant="ghost" onClick={() => handleSort('type')} className="px-0 hover:bg-transparent">
                  <span className="text-base font-semibold">Type</span>
                  {renderSortArrow('type')}
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
                 <Button variant="ghost" onClick={() => handleSort('xFollowers')} className="px-0 hover:bg-transparent flex items-center gap-1">
                  <TwitterIcon />
                  <span className="text-base font-semibold">Twitter/X</span>
                  {renderSortArrow('xFollowers')}
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
                <TableCell className="font-medium max-w-xs">
                    <div className="flex items-start gap-3">
                        <Image
                        src={`https://www.google.com/s2/favicons?domain=${getDomain(source.websiteUrl)}&sz=32`}
                        alt={`${source.name} logo`}
                        width={16}
                        height={16}
                        className="shrink-0 mt-1"
                        unoptimized 
                        />
                        <div className="flex items-center gap-2">
                           <a 
                                href={source.websiteUrl || '#'} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="font-semibold text-primary hover:underline"
                            >
                                {source.name}
                            </a>
                             {mostPopularSource && source.name === mostPopularSource.name && (
                                <Badge variant="destructive">Most Popular</Badge>
                            )}
                            <p className="text-sm text-muted-foreground line-clamp-2">{source.description}</p>
                        </div>
                    </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{source.type || '-'}</TableCell>
                <TableCell className="text-muted-foreground">{source.country || '-'}</TableCell>
                <TableCell className="text-muted-foreground">
                  {source.facebookUrl ? (
                    <a href={source.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      <Facebook className="h-4 w-4 text-[#1877F2]" />
                      <span>{source.facebookFollowers || 'Link'}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-1 text-muted-foreground/50">
                      <Facebook className="h-4 w-4" />
                      <span>{source.facebookFollowers || '-'}</span>
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {source.xUrl ? (
                    <a href={source.xUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      <TwitterIcon />
                      <span>{source.xFollowers || 'Link'}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-1 text-muted-foreground/50">
                      <TwitterIcon />
                      <span>{source.xFollowers || '-'}</span>
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {source.instagramUrl ? (
                    <a href={source.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      <Instagram className="h-4 w-4 text-[#E4405F]" />
                      <span>{source.instagramFollowers || 'Link'}</span>
                    </a>
                  ) : (
                     <div className="flex items-center gap-1 text-muted-foreground/50">
                      <Instagram className="h-4 w-4" />
                      <span>{source.instagramFollowers || '-'}</span>
                    </div>
                  )}
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
    </div>
  );
}
