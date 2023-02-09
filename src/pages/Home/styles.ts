import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const AuthorContainer = styled.section`
  width: 52rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 8px;
  margin-top: -5.5rem;
  z-index: 2;

  display: flex;

  img {
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 6px;

    margin: 2.5rem 2rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 2.5rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  footer {
    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    font-size: 1rem;

    svg {
      margin: 0;
      height: 1.1rem;
      width: 1.1rem;
      margin-right: 0.5rem;
      color: ${(props) => props.theme['base-label']};
    }

    span {
      display: flex;
      align-items: center;
    }
  }
`

export const SearchContainer = styled.section`
  width: 52rem;
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const SearchForm = styled.form`
  display: flex;
  input {
    flex: 1;
    margin-top: 0.75rem;

    border-radius: 6px;
    border: 2px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    outline: 0;

    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }
  }
`
export const IssueContainer = styled.article`
  width: 26rem;
  height: 16.25rem;

  background-color: ${(props) => props.theme['base-profile']};
`
