import { PostContent } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { PostData } from "../Home"
import ReactMarkdown from 'react-markdown'
import { PostHeader } from "./PostHeader";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repo = import.meta.env.VITE_GITHUB_REPONAME;

export function PostPage() {
  const [post, setPost] = useState<PostData>({} as PostData)
  const { postId } = useParams();

  async function getPost() {
    const response = await api.get(`/repos/${username}/${repo}/issues/${postId}`);

    setPost(response.data)
  }

  useEffect(() => {
    getPost()
  }, []);

  return(
    <>
      <PostHeader post={post} />

      <PostContent>
        <ReactMarkdown children={post.body} />
      </PostContent>
    </>
  )
}