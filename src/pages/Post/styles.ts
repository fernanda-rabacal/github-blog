import styled from "styled-components";

export const PostPageContainer = styled.div`
`

export const PostInformationsSection = styled.section`
  margin-top: -6rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({theme}) => theme["base-profile"]};
`

export const Links = styled.span`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({theme}) => theme.blue};
    border-bottom: 1px solid transparent;

      &:hover  {
        border-color: ${({theme}) => theme.blue};
      }
  }
`

export const ProfileInformations = styled.div`
  color: ${({theme}) => theme["base-label"]};
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const PostContent = styled.p`
  margin: 2.5rem 2rem;

  img {
    width: 97%;
  }
`