import { getUsersApi } from "../api/user.api";
import { mapUserToRow, UserRow } from "./user.mapper";

export async function getUsersUseCase(): Promise<UserRow[]> {
  const usersFromApi = await getUsersApi();
  return usersFromApi.map(mapUserToRow);
}
