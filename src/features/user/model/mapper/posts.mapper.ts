import { PostsApi } from "../../api/posts.api";

export interface PostsRow {
    id: number;
    title: string;
    body: string; 
}

export function mapPostsToRow(post: PostsApi): PostsRow {
    return {
        id: post.id,
        title: post.title,
        body: post.body, 
    };
}