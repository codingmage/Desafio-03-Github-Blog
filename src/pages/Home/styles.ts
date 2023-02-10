import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
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
  padding: 2.1rem;

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

  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const DateContainer = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-span']};
  margin-top: 0.2rem;
`
