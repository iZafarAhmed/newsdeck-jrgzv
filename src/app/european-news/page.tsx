
"use client";

import { NewsSourceCard } from "@/components/news-source-card";
import { europeanNewsSources } from "@/data/european-news-sources";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const EuropeanNewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSources = europeanNewsSources.filter(
    (source) =>
      source.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      source.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      source.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          European News Sources
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore a curated list of top news sources from across Europe, covering a wide range of topics and perspectives.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search European sources..."
            className="w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSources.map((source) => (
          <NewsSourceCard key={source.name} source={source} />
        ))}
      </div>
    </div>
  );
};

export default EuropeanNewsPage;
