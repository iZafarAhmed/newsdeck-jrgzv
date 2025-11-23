
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { wisconsinNewsSources, WisconsinNewsSource } from "@/data/wisconsin-news-sources";
import { Search } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";

const WisconsinNewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const columns: ColumnDef<WisconsinNewsSource>[] = [
    {
      accessorKey: "name",
      header: "Source",
      cell: ({ row }) => (
        <a
          href={row.original.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-medium text-primary"
        >
          {row.original.name}
        </a>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "format",
      header: "Format",
    },
  ];

  const filteredData = wisconsinNewsSources.filter((source) =>
    Object.values(source).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Wisconsin News Sources
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore news from America's Dairyland, from the Milwaukee Journal Sentinel to local broadcasters.
        </p>
      </div>
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search Wisconsin sources..."
            className="w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <DataTable columns={columns} data={filteredData} />
    </div>
  );
};

export default WisconsinNewsPage;
