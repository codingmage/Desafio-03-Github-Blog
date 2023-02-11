import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { BlogPostBody, BlogPostContainer, BlogPostHeader } from './styles'

interface PostProps {
  title?: string
  created_at?: string
  comments?: number
  body?: string
}

export function Post() {
  // getting the issue number from the URL (which was created through Link to)
  const { issueNumber } = useParams()

  const [postInfo, setPostInfo] = useState<PostProps>({})

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
      <BlogPostHeader>{postInfo.title}</BlogPostHeader>
      <BlogPostBody>{postInfo.body}</BlogPostBody>
    </BlogPostContainer>
  )
}
