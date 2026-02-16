import { usePosts } from "../hooks/usePosts"
import { PostCard } from "../components/PostCard"

export function PostsPage() {
      console.log("[PostsPage] render");

    const {posts, status, error, reload } = usePosts()
  console.log("[PostsPage] state", { status, error, posts: posts.length });


    if (status === "loading") {
        return <div className="p-4">Loading...</div>
    }

    if (status === "error") {
        return (
        <div className="p-4 space-y-3">
            <div className="text-red-400">Error: {error}</div>
            <button
            onClick={reload}
            className="rounded-md border border-gray-700 px-3 py-2 hover:bg-gray-900"
            >
            Retry
            </button>
        </div>
        );
    }

    if (status === "empty") {
        return <div className="p-4">No data</div>;
    }

    if (status === "idle") {
        return <div className="p-4">Starting…</div>;
    }


    if (status === "success") {
        return (
            <div className="p-4 space-y-3">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
            </div>
        )
    }
    return null
}