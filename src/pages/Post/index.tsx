import { Links, PostContent, PostInformationsSection, PostPageContainer, ProfileInformations } from "./styles";
import { CaretLeft, Link }from "phosphor-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { PostData } from "../Home"
import { relativeDateFormatter } from "../../utils/formatter";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repo = import.meta.env.VITE_GITHUB_REPONAME;

export function PostPage() {
  const [post, setPost] = useState<PostData>({} as PostData)
  const { postId } = useParams();

  async function getPost() {
    const response = await api.get(`/repos/${username}/${repo}/issues/${postId}`);

    setPost(response.data)
  }

  const postCreationFormatted = relativeDateFormatter(post.created_at)

  useEffect(() => {
    getPost()
  }, []);

  return(
    <PostPageContainer className="container">
      <PostInformationsSection>
        <Links>
          <NavLink to="/home">
            <CaretLeft size={16} weight="bold" />
            Voltar
          </NavLink>
          <a target="_blank" href={`https://github.com/${username}/${repo}/issues/${postId}`}>
            Ver no github
            <Link size={16} weight="bold" />
          </a>
        </Links>

        <h2>{post.title}</h2>

        <ProfileInformations>
          <span>
            <FontAwesomeIcon icon={faGithub}/>
            {post.user.login}
            </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay}/>
            {postCreationFormatted}
            </span>
          <span>
            <FontAwesomeIcon icon={faComment}/>
            {post.comments === 1 ? `${post.comments} comentário` : `${post.comments} comentários`} 
            </span>
        </ProfileInformations>
      </PostInformationsSection>

      <PostContent>
        <ReactMarkdown children={post.body} remarkPlugins={[remarkGfm]}/>
      </PostContent>
    </PostPageContainer>
  )
}