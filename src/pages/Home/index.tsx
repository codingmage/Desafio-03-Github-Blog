import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import {
  AuthorContainer,
  HomeContainer,
  IssueContainer,
  SearchContainer,
  SearchForm,
  TextContainer,
} from './styles'
import { FaGithub, FaUserFriends } from 'react-icons/fa'

export function Home() {
  const [authorData, setAuthorData] = useState<object>({})

  useEffect(() => {
    fetch('https://api.github.com/users/codingmage')
      .then((response) => response.json())
      .then((data) => {
        setAuthorData(data)
      })
  }, [])

  const [issuesList, setIssuesList] = useState<object[]>([])

  useEffect(() => {
    fetch(
      'https://api.github.com/search/issues?q=repo:codingmage/Desafio-03-Github-Blog',
    )
      .then((response) => response.json())
      .then((data) => {
        setIssuesList(data.items)
      })
  }, [])

  console.log(issuesList)

  /*   const fetchAuthor = axios.get('https://api.github.com/users/codingmage')

  console.log(fetchAuthor) */

  return (
    <HomeContainer>
      <AuthorContainer>
        <img src={authorData.avatar_url} alt="Foto do autor" />
        <TextContainer>
          <h3>{authorData.name}</h3>
          <p>{authorData.bio}</p>
          <footer>
            <span>
              <FaGithub />
              {authorData.login}
            </span>

            <span>
              <FaUserFriends />
              {authorData.followers} seguidores
            </span>
          </footer>
        </TextContainer>
      </AuthorContainer>
      <SearchContainer>
        <div>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </div>
        <SearchForm>
          <input type="text" placeholder="Buscar conteúdo" />
        </SearchForm>
      </SearchContainer>
      <div>
        {issuesList.map((issue) => {
          return (
            <IssueContainer key={issue.number}>
              <h3>{issue.title}</h3>
              <p>{issue.body}</p>
            </IssueContainer>
          )
        })}
      </div>
    </HomeContainer>
  )
}
