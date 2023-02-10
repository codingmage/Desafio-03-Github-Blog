import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`

export const AuthorContainer = styled.section`
  max-width: 52rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 8px;
  margin-top: -5.5rem;
  z-index: 2;

  display: flex;
  flex-wrap: wrap;

  img {
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 6px;

    margin: 2.5rem 2rem;
  }

  @media screen and (min-width: 1024px) {
    width: 52rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div span {
    margin-right: 2rem;
    margin-top: 2rem;
  }

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

  footer span:last-child {
    justify-content: flex-end;
  }

  a {
    font-size: 0.75rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`

export const SearchContainer = styled.section`
  width: 52rem;
  margin-top: 3rem;

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

export const IssueCatalog = styled.div`
  max-width: 52rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

export const IssueContainer = styled.article`
  max-width: 25rem;
  height: 16.25rem;
  border-radius: 10px;
  padding: 2.2rem;

  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    gap: 1rem;
  }

  h3 {
    display: flex;
    flex-wrap: wrap;

    width: 16rem;
  }
`

export const DateContainer = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-span']};
  margin-top: 0.2rem;
`
