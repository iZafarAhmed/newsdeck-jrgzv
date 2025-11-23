"use client";

import { DataTable } from "@/components/ui/data-table";
import { WrestlingNewsSource } from "@/data/wrestling-news-sources";
import { ColumnDef } from "@tanstack/react-table";

interface WrestlingNewsClientProps {
  columns: ColumnDef<WrestlingNewsSource>[];
  data: WrestlingNewsSource[];
}

export function WrestlingNewsClient({ columns, data }: WrestlingNewsClientProps) {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
