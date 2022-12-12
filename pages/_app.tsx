import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import { Container } from 'semantic-ui-react'
import { NavBar } from '../components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return <Container>
    <NavBar/>
    <Component {...pageProps} />
  </Container>
}
