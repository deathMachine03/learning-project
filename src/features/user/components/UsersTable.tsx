import type { UserRow } from "../model/user.mapper";

type UsersTableProps = {
  rows: UserRow[];
};

export function UsersTable({ rows }: UsersTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-900">
          <tr>
            <th className="px-4 py-3 text-left font-medium">ID</th>
            <th className="px-4 py-3 text-left font-medium">Name</th>
            <th className="px-4 py-3 text-left font-medium">Email</th>
            <th className="px-4 py-3 text-left font-medium">Street</th>
            <th className="px-4 py-3 text-left font-medium">Phone</th>
            <th className="px-4 py-3 text-left font-medium">Company</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-800">
          {rows.map((r) => (
            <tr key={r.id} className="hover:bg-gray-900/40">
              <td className="px-4 py-3">{r.id}</td>
              <td className="px-4 py-3">{r.name}</td>
              <td className="px-4 py-3">{r.email}</td>
              <td className="px-4 py-3">{r.street}</td>
              <td className="px-4 py-3">{r.phone}</td>
              <td className="px-4 py-3">{r.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
