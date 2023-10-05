import { Fragment, useEffect, useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type {
  ColumnDef,
  PaginationState,
  Table as ReactTable,
  Row,
} from "@tanstack/react-table";

import { IconButton } from "@mui/material";
import classNames from "classnames";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  renderSubComponent?: (props: { row: Row<T> }) => React.ReactElement;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  onPaginationChange?: (pagination: PaginationState) => void;
  className?: string;
}

const Table = ({
  data,
  columns,
  renderSubComponent,
  pageIndex,
  pageSize,
  pageCount,
  onPaginationChange,
  className,
}: ReactTableProps<any>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: pageIndex ?? 0,
    pageSize: pageSize ?? 15,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });

  useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange(pagination);
    }
  }, [pagination, onPaginationChange]);

  return (
    <div className="flex flex-col mt-2">
      <div className="overflow-x-auto  sm: rounded-md">
        <div className="inline-block min-w-full ">
          <div className="overflow-hidden p-1">
            <table
              className={classNames(
                `Table min-w-full space-y-4 table-auto`,
                className
              )}
            >
              <thead className="text-xs text-gray-700 uppercase  bg-tinqfiGray">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className=" @apply px-6 py-3 text-left rtl:text-right text-sm font-semibold capitalize tracking-wider bg-[#FAFBFC] text-gray-500y dark:text-gray-100"
                  >
                    {headerGroup.headers.map((header: any) => (
                      <th
                        key={header.id}
                        className="px-2 py-3 text-left rtl:text-center text-xs font-semibold capitalize tracking-wider text-gray-500 dark:text-gray-100"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-sm ">
                {table.getRowModel().rows.map((row) => (
                  <Fragment key={row.id}>
                    <tr
                      className={classNames({
                        "bg-white border-b  hover:bg-gray-50           transition-colors dark:bg-black-300":
                          row.getIsExpanded(),
                      })}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          className=" py-2 px-2"
                          style={{
                            width: cell.column.getSize(),
                          }}
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>

                    {renderSubComponent ? (
                      <tr key={row.id + "-expanded"}>
                        <td colSpan={columns.length}>
                          {renderSubComponent({ row })}
                        </td>
                      </tr>
                    ) : null}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination table={table} />
        </div>
      </div>
    </div>
  );
};

function Pagination<T>({
  table,
}: React.PropsWithChildren<{
  table: ReactTable<T>;
}>) {
  return (
    <div className="flex items-center justify-center gap-2">
      <IconButton
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        <ChevronDoubleLeftIcon className={"h-5 border rounded-md"} />
      </IconButton>

      <IconButton
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ChevronLeftIcon className={"h-5 border rounded-md"} />
      </IconButton>

      <span className="flex items-center gap-1 text-sm">
        <div>Page</div>

        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </span>

      <IconButton
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ChevronRightIcon className={"h-5 border rounded-md"} />
      </IconButton>

      <IconButton
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        <ChevronDoubleRightIcon className={"h-5 border rounded-md"} />
      </IconButton>
    </div>
  );
}

export default Table;
