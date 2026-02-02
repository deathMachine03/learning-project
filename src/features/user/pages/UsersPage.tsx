import { useUsers } from "../hooks/useUsers";
import { UsersTable } from "../components/UsersTable";

export function UsersPage() {
  const { users, status, error, reload } = useUsers();

  if (status === "loading") {
    return <div className="p-4">Loading...</div>;
  }

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

  if (status === "empty") {
    return <div className="p-4">No data</div>;
  }

  if (status === "success") {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Users</h1>

        <button
          onClick={reload}
          className="rounded-md border border-gray-700 px-3 py-2 hover:bg-gray-900"
        >
          Refresh
        </button>
      </div>

      <UsersTable rows={users} />
    </div>
  );
};

}
