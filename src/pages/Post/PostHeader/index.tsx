import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CaretLeft, Link } from "phosphor-react"
import { NavLink, useParams } from "react-router-dom"
import { PostData } from "../../Home"
import { Links, PostInformationsSection, ProfileInformations } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { relativeDateFormatter } from "../../../utils/formatter";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repo = import.meta.env.VITE_GITHUB_REPONAME;

interface PostProps {
  post: PostData
}

export function PostHeader({post} : PostProps) {
  const { postId } = useParams();
  
  const postCreationFormatted = relativeDateFormatter(post.created_at)

  return(
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
  )
}