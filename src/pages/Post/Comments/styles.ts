import styled from "styled-components";

export const CommentsContainer = styled.section`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({theme}) => theme["base-text"]};
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const CommentContainer = styled.div`
  width: 100%;
  padding: 2rem;
  min-height: 8rem;
  border-radius: 10px;
  color: ${({theme}) => theme["base-text"]};
  background: ${({theme}) => theme["base-post"]};

  p {
    margin: 1rem 0 0 1.75rem;
  }

  div {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 9999px;
    }

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
}
`
