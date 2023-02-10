import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import {
  AuthorContainer,
  DateContainer,
  HomeContainer,
  IssueCatalog,
  IssueContainer,
  TextContainer,
} from './styles'
import { FaGithub, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa'
import ClampLines from 'react-clamp-lines'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { SearchIssuesForm } from './components/SearchIssuesForm'

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
          <div>
            <h3>{authorData.name}</h3>
            <span>
              <a href={authorData.html_url}>
                GITHUB
                <FaExternalLinkAlt />
              </a>
            </span>
          </div>
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
      <SearchIssuesForm />
      <IssueCatalog>
        {issuesList.map((issue) => {
          return (
            <IssueContainer key={issue.number}>
              <div>
                <h3>{issue.title}</h3>
                <DateContainer>
                  {formatDistanceToNow(new Date(issue.updated_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </DateContainer>
              </div>
              <ClampLines
                text={issue.body}
                id="default"
                lines={2}
                buttons={false}
              />
            </IssueContainer>
          )
        })}
      </IssueCatalog>
    </HomeContainer>
  )
}
