"use client";
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ErrorBoundary from "@/components/ui/error-boundary";
import { Skeleton } from "./skeleton";
import Pagination from "./table-pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  showOptions?: boolean;
  hideFilterButton?: boolean;
  hideColumnsInMobile?: boolean;
  totalPage: number;
  page?: number;
  loading?: boolean;
  showSearch?: boolean;
  changePage: Function;
  showHeader?: boolean;
  children?: ReactNode;
  selectedRows?: any;
  className?: string;
  rowClassName?: string;
  setSelectedRows?: (data: any) => void;
}

export default function DataTable<TData, TValue>({
  columns,
  totalPage,
  data,
  page = 0,
  rowClassName,
  className,
  showHeader = true,
  changePage,
  loading = false,
  selectedRows,
  setSelectedRows,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState(selectedRows ?? {});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: page - 1,
    pageSize: 25,
  });

  useEffect(() => {
    changePage(pagination.pageIndex + 1);
  }, [pagination]);

  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    enableGlobalFilter: true,
    state: { pagination: pagination },
    pageCount: totalPage,
    onPaginationChange: setPagination,
    manualFiltering: true,
    getCoreRowModel: getCoreRowModel(),
    /*    getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setGlobalFilter, */
  });

  useEffect(() => {
    if (setSelectedRows) {
      setSelectedRows(rowSelection);
    }
  }, [rowSelection]);

  return (
    <div>
      <div
        className={cn(
          "rounded dark:bg-dark-primary border overflow-hidden bg-white",
          className
        )}
      >
        <Table>
          {showHeader && (
            <TableHeader>
              {table?.getHeaderGroups().map((headerGroup) => (
                <TableRow
                className="bg-gray-200"
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="text-sm  text-gray-800  font-medium whitespace-nowrap"
                    >
                      <span className="flex justify-between capitalize  font-semibold items-center">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </span>
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
          )}
          <TableBody>
            {!loading &&
              (table?.getRowModel().rows?.length ? (
                table?.getRowModel().rows.map((row) => (
                  <TableRow
                    className={cn("h-10", rowClassName)}
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row?.getVisibleCells().map((cell) => (
                      <ErrorBoundary key={cell.id}>
                        <TableCell>
                          {flexRender(
                            cell?.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      </ErrorBoundary>
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
              ))}

            {loading && (
              <>
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <TableRow key={i} className=" p-1">
                      {columns.map((column, j) => (
                        <TableCell key={j} className="h-10">
                          <Skeleton className="h-6 w-full" />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </>
            )}
          </TableBody>
        </Table>
        <div className="flex md:items-center flex-wrap border-t py-2 px-4 bg-white w-full justify-between">
          <div className="py-1 min-h-[60px]   md:px-4 items-center flex flex-row w-fit  justify-between gap-2">
            <p className="text-[#6B7280]">Showing</p>
            <div className="flex flex-col items-center gap-3">
              {page}-{totalPage}
            </div>
            <div>
              <span className="text-[#6B7280]">of</span>
              &nbsp; {totalPage}
            </div>
          </div>
          <Pagination
            page={page}
            changePage={changePage}
            totalPage={totalPage}
            className="md:ml-auto"
          />
        </div>
      </div>
    </div>
  );
}
