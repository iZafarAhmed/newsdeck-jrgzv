"use client";

import { NewsDeckClient } from "@/components/news-deck-client";
import { newsData } from "@/data/news-data";

export const TechNewsClient = () => {
  const columns = [
    {
      accessorKey: "source",
      header: "Source",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "publishedAt",
      header: "Published At",
    },
    {
      accessorKey: "url",
      header: "URL",
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Tech News</h2>
      </div>
      <NewsDeckClient columns={columns} data={newsData} />
    </div>
  );
};
