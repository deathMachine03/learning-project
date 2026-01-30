import { getUsers } from "../api/usersApi";
import { mapUserToRow } from "./user.mapper";

export async function getUsersUseCase() {
    const users = await getUsers()
    return users.map(mapUserToRow)
}