import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostCard = styled(Link)`
  padding: 2rem;
  text-decoration: none;
  border-radius: 8px;
  color: ${({theme}) => theme["base-text"]};
  background: ${({theme}) => theme["base-post"]};
  border: 1px solid transparent;
  height: 16.25rem;
  
  &:hover {
    transition: 0.4s;
    border-color: ${({theme}) => theme["base-span"]}
  }

  div {
    display: flex;
    margin-bottom: 2.25rem;
    
    strong {
      flex: 1;
      font-size: 1.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      width: max-content
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-height: 25.6px;
  }
`