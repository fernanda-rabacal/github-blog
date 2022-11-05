import styled from "styled-components";

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

export const SearchSection = styled.div`
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
  }
`

export const Posts = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
  margin-top: 3rem;
`

export const PostCard = styled.a`
  cursor: pointer;
  padding: 2rem;
  border-radius: 8px;
  background: ${({theme}) => theme["base-post"]};
  height: 16.25rem;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }
`