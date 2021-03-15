import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../app/styles/globals';
import { defaultTheme } from '@styles/theme';
import { BooksProvider } from '@contexts/BookContext';
import { AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <ThemeProvider theme={defaultTheme}>
      <BooksProvider books={pageProps.books} reviews={pageProps.reviewsArray}>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </BooksProvider>
      <GlobalStyle />
    </ThemeProvider>
  </>
  )
}

export default MyApp
