import { PostApi } from "../../api/posts.api";

export interface PostCardModel {
    id: number;
    title: string;
    body: string; 
}

export function mapPostsToRow(post: PostApi): PostCardModel {
    return {
        id: post.id,
        title: post.title,
        body: post.body, 
    };
}