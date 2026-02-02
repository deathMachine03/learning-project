import { useEffect, useState, useCallback, useRef } from "react";
import { getUsersUseCase } from "../model/get-users.usecase";
import type { UserRow } from "../model/user.mapper";

type Status = "idle" | "loading" | "success" | "empty" | "error";

export function useUsers() {
  const [status, setStatus] = useState<Status>("idle");
  const [users, setUsers] = useState<UserRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  const aliveRef = useRef(true);

  useEffect(() => {
    return () => {
      aliveRef.current = false;
    };
  }, []);

  const loadUsers = useCallback(async () => {
    setStatus("loading");
    setError(null);

    try {
      const data = await getUsersUseCase();
      if (!aliveRef.current) return;

      if (data.length === 0) {
        setStatus("empty");
        setUsers([]);
      } else {
        setStatus("success");
        setUsers(data);
      }
    } catch {
      if (!aliveRef.current) return;
      setStatus("error");
      setError("Ошибка загрузки");
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { status, users, error, reload: loadUsers };
}
