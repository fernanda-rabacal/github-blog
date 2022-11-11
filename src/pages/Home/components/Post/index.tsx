import { PostData } from "../..";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { PostCard } from "./styles";

interface PostProps {
  post: PostData
}

export function Post({post}: PostProps) {
  const postCreationFormatted = relativeDateFormatter(post.created_at)

  return(
    <PostCard to={`/posts/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{postCreationFormatted}</span>
      </div>

      <p>
        {post.body}
      </p>
    </PostCard>
  )
}