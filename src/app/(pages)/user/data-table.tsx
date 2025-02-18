'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { User } from '@/type';
import { useSelectionStore } from '@/store/useSelectionStore';

interface DataTableProps {
  data: User[];
  columns: ColumnDef<User>[];
}

export function DataTable({ data, columns }: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const { setSelectedItems } = useSelectionStore();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
  });

  useEffect(() => {
    const selectedIds = table
      .getSelectedRowModel()
      .rows.map((row) => row.original.id);
    setSelectedItems(selectedIds);
  }, [setSelectedItems, rowSelection, table]);

  const selectedRowCount = table.getFilteredSelectedRowModel().rows.length;
  const headerContent =
    selectedRowCount > 0 ? `${selectedRowCount} items selected` : '';

  return (
    <div className="w-full space-y-4">
      {/* Filter Inputs */}
      <div className="flex p-1.5">
        <div className="my-1.5 px-1.5">
          <Input
            placeholder="ID"
            value={(table.getColumn('id')?.getFilterValue() as string) ?? ''}
            onChange={(e) =>
              table.getColumn('id')?.setFilterValue(e.target.value)
            }
            className="h-8 max-w-[140px] bg-gray-50 text-xs placeholder:text-xs"
          />
        </div>
        <div className="my-1.5 px-1.5">
          <Input
            placeholder="Full Name"
            value={
              (table.getColumn('fullName')?.getFilterValue() as string) ?? ''
            }
            onChange={(e) =>
              table.getColumn('fullName')?.setFilterValue(e.target.value)
            }
            className="h-8 max-w-[140px] bg-gray-50 text-xs placeholder:text-xs"
          />
        </div>
        <div className="my-1.5 px-1.5">
          <Input
            placeholder="Username"
            value={
              (table.getColumn('username')?.getFilterValue() as string) ?? ''
            }
            onChange={(e) =>
              table.getColumn('username')?.setFilterValue(e.target.value)
            }
            className="h-8 max-w-[140px] bg-gray-50 text-xs placeholder:text-xs"
          />
        </div>
        <div className="my-1.5 px-1.5">
          <Input
            placeholder="User Type"
            value={
              (table.getColumn('userType')?.getFilterValue() as string) ?? ''
            }
            onChange={(e) =>
              table.getColumn('userType')?.setFilterValue(e.target.value)
            }
            className="h-8 max-w-[140px] bg-gray-50 text-xs placeholder:text-xs"
          />
        </div>
      </div>
      <div className="border-border h-[calc(100vh-300px)] border-t">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <TableHead key={header.id}>
                    {index === 0 ? (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )
                    ) : selectedRowCount > 0 ? (
                      index === 1 ? (
                        <span>{headerContent}</span>
                      ) : null
                    ) : header.isPlaceholder ? null : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="border-border mx-2 flex items-center justify-between border-t p-4">
        <div className="border-border flex overflow-hidden rounded-md border">
          {[20, 100, 500, 2500].map((size) => (
            <Button
              key={size}
              variant="outline"
              size="sm"
              className={cn(
                'rounded-none border-0',
                table.getState().pagination.pageSize === size &&
                  'bg-accent text-accent-foreground',
              )}
              onClick={() => table.setPageSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </span>
          <Button variant="ghost" size="icon">
            <Heart className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
