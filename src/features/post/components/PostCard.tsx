import type { PostCardModel } from "../model/mapper/posts.mapper";

type PostCardProps = {
    post: PostCardModel
}

export function PostCard({post}: PostCardProps) {
    return (
          <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
      <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
        {post.title}
      
      </h5>

      <p className="text-body mb-6">
        {post.body}
      </p>

      <span className="text-xs opacity-60">
        #{post.id}
      </span>
    </div>
  );
}