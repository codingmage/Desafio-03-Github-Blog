import axios from 'axios'
import { useContext } from 'react'
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
import { IssuesContext } from '../../contexts/IssuesContext'

export function Home() {
  /*   const fetchAuthor = axios.get('https://api.github.com/users/codingmage')

  console.log(fetchAuthor) */

  const { issuesList } = useContext(IssuesContext)

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
