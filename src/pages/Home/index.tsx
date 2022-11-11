
import { Link } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { HomeContainer, Informations, Links, PostCard, Posts, Profile, SearchSection } from "./styles";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import {  zodResolver } from '@hookform/resolvers/zod'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserGroup, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { relativeDateFormatter } from "../../utils/formatter";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repo = import.meta.env.VITE_GITHUB_REPONAME;

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

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

const searchFormSchema = z.object({
  query: z.string()
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function HomePage() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );
  const [posts, setPosts] = useState<PostData[]>([])
  const { 
    register, 
    handleSubmit
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const postsQuantity = posts.length

  const getProfileData = useCallback(async () => { 
    const response = await api.get(`/users/${username}`);

    setProfileData(response.data); 
  }, [profileData]);

  const getPosts = useCallback(async (query: string = "") => { 
    const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repo}`);

    setPosts(response.data.items); 
  }, [posts]);
  
  async function handleSearchPosts(data: searchFormInputs) {
    await getPosts(data.query)
  }

  useEffect(() => {
    getProfileData();
    getPosts()
  }, []);

  return (
    <HomeContainer className="container">
      <Profile>
        <img src={profileData.avatar_url}/>

        <Informations>
          <span>
            <h2>{profileData.name}</h2>
            <a target="_blank" href={`https://github.com/${username}`}>
              GITHUB
              <Link size={16} weight='bold' />
            </a>
          </span>
          <p>{profileData.bio}</p>

          <Links> 
            <p>
              <FontAwesomeIcon icon={faGithub}/>
              {profileData.login}
            </p>
            {profileData.company && 
              <p>
                <FontAwesomeIcon icon={faBuilding}/>
                {profileData.company}
              </p>}
            <p>
            <FontAwesomeIcon icon={faUserGroup}/>
              {profileData.followers} seguidores
            </p>
          </Links>
        </Informations>
      </Profile>

      <SearchSection onSubmit={handleSubmit(handleSearchPosts)}>
        <label htmlFor="post-search">
          <span>
            <h4>Publicações</h4>
            <p>{postsQuantity == 1 ? `${postsQuantity} publicação` : `${postsQuantity} publicações` }</p>
          </span>
          <input 
            id="post-search" 
            type="search" 
            placeholder="Buscar conteúdo"
            {...register('query')} />
        </label>
      </SearchSection>

      <Posts>
        {posts.map(post => {
          const postCreationFormatted = relativeDateFormatter(post.created_at)

          return (
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
        })}
      </Posts>
    </HomeContainer>
  )
}