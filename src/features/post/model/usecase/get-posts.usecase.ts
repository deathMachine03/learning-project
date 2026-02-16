import { getPostsApi } from "../../api/posts.api";
import { mapPostsToRow, PostCardModel } from "../mapper/posts.mapper";

export async function getPostsUseCase(): Promise<PostCardModel[]> {
    const postsFromApi = await getPostsApi()
    return postsFromApi.map(mapPostsToRow)
}