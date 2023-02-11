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
import { Link } from 'react-router-dom'

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
            <Link key={issue.number} to={`post/${issue.number}`}>
              <IssueContainer>
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
            </Link>
          )
        })}
      </IssueCatalog>
    </HomeContainer>
  )
}
