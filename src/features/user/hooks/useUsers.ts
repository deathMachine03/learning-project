import { useEffect } from "react";
import { useQuery, keepPreviousData, useQueryClient } from "@tanstack/react-query";
import { getUsersUseCase } from "../model/usecase/get-users.usecase";
import type { UserRow } from "../model/mapper/user.mapper";

type Status = "loading" | "success" | "empty" | "error";

export function useUsers(page: number, pageSize: number) {
  const qc = useQueryClient();

  const query = useQuery({
    queryKey: ["users", page, pageSize],
    queryFn: ({ signal }) =>
      getUsersUseCase(page, pageSize, signal),
    placeholderData: keepPreviousData, // не очищаем таблицу при смене страницы
    staleTime: 30_000,
  });


  const users: UserRow[] = query.data?.items ?? [];
  const hasNext = query.data?.hasNext ?? false;

  // Prefetch следующей страницы (ускоряет Next)
  useEffect(() => {
    if (!hasNext) return;

    const nextPage = page + 1;

    qc.prefetchQuery({
      queryKey: ["users", nextPage, pageSize],
      queryFn: ({ signal }) => getUsersUseCase(nextPage, pageSize, signal),
      staleTime: 30_000,
    });
  }, [qc, page, pageSize, hasNext]);


   const status: Status =
    query.isPending
      ? "loading"
      : query.isError
      ? "error"
      : users.length === 0
      ? "empty"
      : "success";

    const reload = () => {
    void query.refetch();
  };

    return {
    status,
    users,
    hasNext: query.data?.hasNext ?? false,
    error: query.isError ? "Ошибка загрузки" : null,
    isFetching: query.isFetching, // мягкая загрузка
    reload
  };
}
