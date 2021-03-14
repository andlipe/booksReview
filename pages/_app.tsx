import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../app/styles/globals';
import { defaultTheme } from '@styles/theme';
import { BooksProvider } from '@contexts/BookContext';
function MyApp({ Component, pageProps }) {
  return (
  <>
    <ThemeProvider theme={defaultTheme}>
      <BooksProvider books={pageProps.books} reviews={pageProps.reviewsArray}>
      <Component {...pageProps} />
      </BooksProvider>
      <GlobalStyle />
    </ThemeProvider>
  </>
  )
}

export default MyApp
