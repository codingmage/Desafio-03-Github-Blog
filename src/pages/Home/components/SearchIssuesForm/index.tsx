import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchContainer, SearchForm } from './styles'
import { useContext } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchIssuesForm() {
  const { fetchIssues, issuesList } = useContext(IssuesContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchIssues(data: SearchFormInputs) {
    fetchIssues(data.query)
    console.log(data)
  }

  return (
    <SearchContainer>
      <div>
        <h3>Publicações</h3>
        <span>
          {issuesList.length}{' '}
          {issuesList.length === 1 ? 'publicação' : 'publicações'}
        </span>
      </div>
      <SearchForm onSubmit={handleSubmit(handleSearchIssues)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchForm>
    </SearchContainer>
  )
}
