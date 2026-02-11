export interface PostsApi {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function request<T>(url:string): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`, {
      cache: "no-store",
});
    if (!res.ok) {
        throw new Error('request failed')
    }
    return res.json()
}

export async function getPostsApi(): Promise<PostsApi[]> {
    return request<PostsApi[]>("/posts")
}