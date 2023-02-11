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

  @media screen and (min-width: 1024px) {
    width: 52rem;
  }

  padding: 1rem;
`

export const BlogPostBody = styled.div`
  padding: 2rem 1rem;
`
