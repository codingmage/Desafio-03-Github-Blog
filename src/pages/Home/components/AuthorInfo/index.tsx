import { useEffect, useState } from 'react'
import { AuthorContainer, TextContainer } from './styles'
import { FaGithub, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa'

interface Author {
  avatar_url?: string
  name?: string
  html_url?: string
  bio?: string
  login?: string
  followers?: number
}

export function AuthorInfo() {
  const [authorData, setAuthorData] = useState<Author>({})

  useEffect(() => {
    fetch('https://api.github.com/users/codingmage')
      .then((response) => response.json())
      .then((data) => {
        setAuthorData(data)
      })
  }, [])

  return (
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
  )
}
