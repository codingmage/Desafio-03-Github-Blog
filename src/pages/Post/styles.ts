import styled from 'styled-components'

export const BlogPostContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BlogPostHeader = styled.header`
  max-width: 52rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 8px;
  margin-top: -2rem;
  z-index: 2;
  padding: 2rem;

  @media screen and (min-width: 1024px) {
    width: 52rem;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.blue};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
    }
  }

  h2 {
    margin-top: 1.2rem;
    margin-bottom: 0.5rem;
  }
`

export const BlogPostBody = styled.div`
  padding: 2rem 1rem;

  max-width: 52rem;

  .react-markdown {
    white-space: 'pre-wrap';
    line-height: 1.6;
    hyphens: 'auto';
  }

  @media screen and (min-width: 1024px) {
    width: 52rem;
  }

  p {
    margin-top: 1em;
  }

  pre {
    background-color: ${(props) => props.theme['base-profile']};
    padding: 1rem 1rem;
    margin-top: 1em;
  }
`
export const ExtraContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 2rem;

  color: ${(props) => props.theme['base-label']};

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`
