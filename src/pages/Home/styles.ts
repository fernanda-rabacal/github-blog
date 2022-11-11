import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
`


export const Profile = styled.div`
  margin-top: -6rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({theme}) => theme["base-profile"]};
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 6px;
  }

  p {
    display: flex;
    gap: 0.4rem;
    align-items: center;
  }
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1;

   span {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${({theme}) => theme.blue};
      font-weight: 700;
      gap: 0.2rem;
      border-bottom: 1px solid transparent;

      &:hover  {
        border-color: ${({theme}) => theme.blue};
      }
    }
   }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  gap: 1.5rem;
  margin-top: 1.5rem;
`

export const SearchSection = styled.form`
  width: 100%;
  margin-top: 4.5rem;

  span {
    display: flex;
    justify-content: space-between;
  }

  input {
    width: 100%;
    height: 3rem;
    margin-top: 0.75rem;
    padding-left: 1rem;
    border-radius: 6px;
    background: ${({theme}) => theme["base-input"]};
    border: 1px solid ${({theme}) => theme["base-border"]};
    color: ${({theme}) => theme["base-text"]};
    
    &::placeholder {
      color: ${({theme}) => theme["base-label"]};
    }

    &:focus {
      border-color: ${({theme}) => theme["base-span"]}
    }
  }
`

export const Posts = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
  margin-top: 3rem;
`

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