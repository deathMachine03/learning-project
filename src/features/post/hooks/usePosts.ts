    import { useState, useEffect } from "react";
    import { getPostsUseCase } from "../model/usecase/get-posts.usecase";
    import type { PostCardModel } from "../model/mapper/posts.mapper";

    type Status = "idle" | "loading" | "success" | "empty" | "error";

    export function usePosts() {
          console.log("[usePosts] init");

        const [status, setStatus] = useState<Status>("idle")
        const [posts, setPosts] = useState<PostCardModel[]>([]);
        const [error, setError] = useState<string | null>(null)

        async function loadPosts() {
            setStatus('loading')
            setError(null)
            try{
                const data = await getPostsUseCase()
                if(data.length === 0) {
                    setStatus('empty')
                    setPosts([])
                } else {
                    setStatus('success')
                    setPosts(data)
                }
            }
            catch{
                setStatus('error')
                setError("error posts load")
            }
            
        }

        useEffect(() => {
            loadPosts()
        }, [])

        return{status,posts,error, reload: loadPosts}
    }