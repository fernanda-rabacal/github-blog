import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Posts } from "./styles";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repo = import.meta.env.VITE_GITHUB_REPONAME;

export interface PostData {
  title: string;
  html_url: string;
  number: number;
  body: string;
  comments: number;
  created_at: string;
  user: {
    login: string;
  }
}

export function HomePage() {
  const [posts, setPosts] = useState<PostData[]>([])
  const postsQuantity = posts.length

  const getPosts = useCallback(async (query: string = "") => { 
    const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repo}`);

    setPosts(response.data.items); 
  }, [posts]);

  useEffect(() => {
    getPosts()
  }, []);

  return (
    <>
      <Profile />
      <SearchInput getPosts={getPosts} postsQuantity={postsQuantity} />
      <Posts>
        {posts.map(post => {
          return (
            <Post post={post} />
          )
        })}
      </Posts>
    </>
  )
}