import { useCallback, useEffect, useState } from "react";
import { CommentContainer, CommentsContainer, ContentContainer } from "./styles";
import { relativeDateFormatter } from "../../../utils/formatter";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from 'react-markdown'
import { api } from "../../../lib/axios";

interface Comments {
  created_at: string;
  body: string;
  user: {
    login: string
    avatar_url: string
  }
}

interface CommentsProps {
  postId: string | undefined
}

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repo = import.meta.env.VITE_GITHUB_REPONAME;

export function Comments({postId} : CommentsProps) {
  const [comments, setComments] = useState<Comments[]>([])

  const getComments = useCallback(async() => {
    const response = await api.get(`/repos/${username}/${repo}/issues/${postId}/comments`);

    setComments(response.data)
  }, [comments])

  useEffect(() => {
    getComments()
  }, []);

  if(comments.length === 0) {
    return <></>
  }

  return(
    <CommentsContainer>
      <header>
        <h3>Comentários</h3>  
      </header>
      
      <ContentContainer>
        {comments.map(comment => {
          const formattedCreatedAt = relativeDateFormatter(comment.created_at)
          return(
            <CommentContainer>
              <div>
                <div>
                  <img src={comment.user.avatar_url}/>
                  <span>
                    <FontAwesomeIcon icon={faGithub}/>
                    {comment.user.login}
                  </span>
                </div>

                <span>{formattedCreatedAt}</span>
              </div>

              <p>
                <ReactMarkdown children={comment.body} />
              </p>
            </CommentContainer>
          )
        })}
      </ContentContainer>
    </CommentsContainer>
  )
}