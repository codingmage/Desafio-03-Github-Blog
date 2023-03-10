import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface IssuesProviderProps {
  children: ReactNode
}

interface SingleIssue {
  number: number
  title: string
  updated_at: string
  body: string
}

interface IssuesContextType {
  issuesList: SingleIssue[]
  fetchIssues: (query?: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issuesList, setIssuesList] = useState<SingleIssue[]>([])

  async function fetchIssues(query: string = '') {
    /* alternate way: 
        const response = await api.get(`search/issues`, {
      params: {
        q: `${query}repo:codingmage/Desafio-03-Github-Blog`,
      },
    }) */
    const response = await api.get(
      `search/issues?q=${query}repo:codingmage/Desafio-03-Github-Blog`,
    )
    setIssuesList(response.data.items)
  }
  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issuesList, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
