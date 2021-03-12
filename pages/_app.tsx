import { GlobalStyle } from '../app/styles/globals';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
    <GlobalStyle />
  </>
  )
}

export default MyApp
