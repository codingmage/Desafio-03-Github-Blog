import styled from 'styled-components'

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
