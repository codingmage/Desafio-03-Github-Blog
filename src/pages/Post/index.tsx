import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import {
  BlogPostBody,
  BlogPostContainer,
  BlogPostHeader,
  ExtraContainer,
} from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface UserProps {
  login?: string
}

interface PostProps {
  title?: string
  updated_at: string
  comments?: number
  body: string
  html_url?: string
  user: UserProps
}

export function Post() {
  // getting the issue number from the URL (which was created through Link to)
  const { issueNumber } = useParams()

  const [postInfo, setPostInfo] = useState<PostProps>({
    body: '',
    user: {},
    updated_at: '2023-01-01T10:00:00.000Z',
  })

  async function fetchPost(postNumber: string | undefined) {
    const response = await api.get(
      `repos/codingmage/Desafio-03-Github-Blog/issues/${postNumber}`,
    )
    setPostInfo(response.data)
  }
  // running fetchPost only once, when it loads
  useEffect(() => {
    fetchPost(issueNumber)
  }, [issueNumber])

  return (
    <BlogPostContainer>
      <BlogPostHeader>
        <nav>
          <ul>
            <Link to="../">
              <li>
                <span>
                  <FaChevronLeft /> VOLTAR
                </span>
              </li>
            </Link>
            <li>
              <a href={postInfo.html_url} target="_blank" rel="noreferrer">
                <span>
                  VER NO GITHUB <FaExternalLinkAlt />
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <h2>{postInfo.title}</h2>
        <ExtraContainer>
          <span>
            <FaGithub /> {postInfo.user.login}
          </span>
          <span>
            <FaCalendarDay />
            {formatDistanceToNow(new Date(postInfo.updated_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
          <span>
            <FaComment /> {postInfo.comments}
            {postInfo.comments === 1 ? ' comentário' : ' comentários'}
          </span>
        </ExtraContainer>
      </BlogPostHeader>
      <BlogPostBody>
        <ReactMarkdown
          className="react-markdown"
          remarkPlugins={[remarkGfm, remarkBreaks]}
        >
          {postInfo.body}
        </ReactMarkdown>
      </BlogPostBody>
    </BlogPostContainer>
  )
}
