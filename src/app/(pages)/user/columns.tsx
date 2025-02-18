'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { useSelectionStore } from '@/store/useSelectionStore';
import { User } from '@/type';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => {
          table.toggleAllPageRowsSelected(!!value);

          if (value) {
            const selectedIds = table
              .getSelectedRowModel()
              .rows.map((row) => row.original.id);
            console.log(selectedIds);
            useSelectionStore.getState().setSelectedItems(selectedIds);
          } else {
            useSelectionStore.getState().setSelectedItems([]);
          }
        }}
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
    accessorKey: 'fullName',
    header: 'Full Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <span
          className={
            status === 'Active'
              ? 'rounded-sm bg-emerald-500/15 px-3 py-1 font-medium text-emerald-500'
              : 'text-destructive bg-destructive/15 rounded-sm px-3 py-1 font-medium'
          }
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: 'userType',
    header: 'User Type',
  },
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => {
      const id = row.getValue('id') as string;
      return <span className="w-72 truncate">{id}</span>;
    },
  },
  {
    accessorKey: 'username',
    header: 'Username',
  },
];
