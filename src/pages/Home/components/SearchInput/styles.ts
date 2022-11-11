import styled from "styled-components";

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