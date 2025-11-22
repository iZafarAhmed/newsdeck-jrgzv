"use client";

import { NewsDeckClient } from "@/components/news-deck-client";
import { browseNewsData } from "@/data/browse-news-data";
import { DataTable } from "@/components/ui/data-table";
import { top100NewsData } from "@/data/top-100-news";
import { ColumnDef } from "@tanstack/react-table";
import { Top100NewsSource } from "@/data/top-100-news";

export const BrowseWorldNewsClient = () => {
  const columns: ColumnDef<Top100NewsSource>[] = [
    {
      accessorKey: "name",
      header: "Source",
      cell: ({ row }) => (
        <a
          href={row.original.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
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

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">World News</h2>
      </div>
      <DataTable columns={columns} data={top100NewsData} />
    </div>
  );
};
