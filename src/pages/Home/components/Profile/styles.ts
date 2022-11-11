import styled from "styled-components"

export const ProfileContainer = styled.div`
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