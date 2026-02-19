import { getUsersApi } from "../../api/user.api";
import { mapUserToRow, UserRow } from "../mapper/user.mapper";

export async function getUsersUseCase(
  page:number,
  pageSize:number,
  signal?:AbortSignal
): Promise<{
  items:UserRow[],
  hasNext:boolean;
}> {
  const start = (page - 1) * pageSize;
  const usersFromApi = await getUsersApi({start, limit:pageSize}, signal);
  const items = usersFromApi.map(mapUserToRow);

  const hasNext = items.length === pageSize;
  return { items, hasNext };

}
