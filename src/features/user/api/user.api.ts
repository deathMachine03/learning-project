export interface UserApi {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
  };
  phone: string;
  company: {
    name: string;
  };
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function request<T>(url: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, 
    { cache: "no-store", 
      signal 
    });
  if (!res.ok) 
    throw new Error("request failed");
  return res.json();
}

export async function getUsersApi(
  params: { start: number; limit: number },
  signal?: AbortSignal
): Promise<UserApi[]> {
  const qs = new URLSearchParams({
    start: String(params.start),
    limit: String(params.limit),
  });
    return request<UserApi[]>(`/users?${qs.toString()}`, signal)
}