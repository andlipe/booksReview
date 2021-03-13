import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../app/styles/globals';
import { defaultTheme } from '@styles/theme';
function MyApp({ Component, pageProps }) {
  return (
  <>
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  </>
  )
}

export default MyApp
