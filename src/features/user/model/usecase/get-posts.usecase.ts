import { getPostsApi } from "../../api/posts.api";
import { mapPostsToRow, PostsRow } from "../mapper/posts.mapper";

export async function getPostsUseCase(): Promise<PostsRow[]> {
    const postsFromApi = await getPostsApi()
    return postsFromApi.map(mapPostsToRow)
}