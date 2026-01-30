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

async function request<T>(url:string): Promise<T> {
    const res = await fetch(`${BASE_URL} ${url}`);
    if (!res.ok) {
        throw new Error('request failed')
    }
    return res.json()
}

export async function getUsersApi(): Promise<UserApi[]> {
    return request<UserApi[]>("/users")
}