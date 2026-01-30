import { useEffect, useState } from "react";
import { getUsersUseCase } from "../model/get-users.usecase";
import { UserRow } from "../model/user.mapper";

export function useUsers() {
    const [users,setUsers] = useState<UserRow[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function loadUsers() {
        setLoading(true);
        setError(null);
        
        try{
            const data = await getUsersUseCase();
            setUsers(data);
        }   catch {
            setError("Error");
        }   finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return {users, loading, error, reload: loadUsers};
}