import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import {
  DateContainer,
  HomeContainer,
  IssueCatalog,
  IssueContainer,
} from './styles'
import ClampLines from 'react-clamp-lines'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { SearchIssuesForm } from './components/SearchIssuesForm'
import { AuthorInfo } from './components/AuthorInfo'

export function Home() {
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
      <AuthorInfo />
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
