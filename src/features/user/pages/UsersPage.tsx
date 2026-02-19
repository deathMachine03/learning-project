import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { UsersTable } from "../components/UsersTable";

export function UsersPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const { users, status, error, reload, isFetching, hasNext } =
    useUsers(page, pageSize);

  const canPrev = page > 1;

  if (status === "loading") return <div className="p-4">Loading...</div>;

  if (status === "error") {
    return (
      <div className="p-4 space-y-3">
        <div className="text-red-400">Error: {error}</div>
        <button
          onClick={reload}
          className="rounded-md border border-gray-700 px-3 py-2 hover:bg-gray-900"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Users</h1>

        <div className="flex items-center gap-2">
          <select
            className="rounded-md border border-gray-700 bg-transparent px-2 py-2"
            value={pageSize}
            onChange={(e) => {
              setPage(1);
              setPageSize(Number(e.target.value));
            }}
          >
            {[3, 5, 10].map((s) => (
              <option key={s} value={s}>
                {s} / page
              </option>
            ))}
          </select>

          <button
            onClick={reload}
            className="rounded-md border border-gray-700 px-3 py-2 hover:bg-gray-900"
          >
            {isFetching ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {status === "empty" ? <div>No data</div> : <UsersTable rows={users} />}

      <div className="flex items-center justify-between pt-2">
        <button
          disabled={!canPrev}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="rounded-md border border-gray-700 px-3 py-2 hover:bg-gray-900 disabled:opacity-40"
        >
          Prev
        </button>

        <div className="text-sm text-gray-400">Page: {page}</div>

        <button
          disabled={!hasNext}
          onClick={() => setPage((p) => p + 1)}
          className="rounded-md border border-gray-700 px-3 py-2 hover:bg-gray-900 disabled:opacity-40"
        >
          Next page
        </button>
      </div>
    </div>
  );
}
