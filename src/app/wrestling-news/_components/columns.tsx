"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { WrestlingNewsSource } from "@/data/wrestling-news-sources"

export const columns: ColumnDef<WrestlingNewsSource>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "websiteUrl",
    header: "Website",
    cell: ({ row }) => {
        const source = row.original
        return (
            <a href={source.websiteUrl} target="_blank" rel="noreferrer">
                {source.websiteUrl}
            </a>
        )
    }
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const source = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(source.websiteUrl)}
            >
              Copy Website URL
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {source.facebookUrl && source.facebookUrl !== 'N/A' && (
              <DropdownMenuItem>
                <a href={source.facebookUrl} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </DropdownMenuItem>
            )}
            {source.xUrl && source.xUrl !== 'N/A' && (
              <DropdownMenuItem>
                <a href={source.xUrl} target="_blank" rel="noopener noreferrer">
                  X
                </a>
              </DropdownMenuItem>
            )}
            {source.instagramUrl && source.instagramUrl !== 'N/A' && (
              <DropdownMenuItem>
                <a href={source.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]