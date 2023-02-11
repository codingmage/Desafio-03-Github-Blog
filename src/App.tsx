import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IssuesProvider } from './contexts/IssuesContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <IssuesProvider>
          <Router />
        </IssuesProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
