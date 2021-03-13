import React from 'react';
import { render } from '@testing-library/react'
import books from '../../../livros.json';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/theme';
import BookDetails from './BookDetails';
describe('BookDetailsComponent', () => {
    it('Should render goodReads rating counts on succed api call', () => {
        const fakeIsbn = {
            average_rating: '3.98',
            id: 34664992,
            isbn: null,
            isbn13: '9788583180876',
            ratings_count: 105,
            reviews_count: 178,
            text_reviews_count: 8,
            work_ratings_count: 40802,
            work_reviews_count: 104027,
            work_text_reviews_count: 3569,
        }
        const { getByText } = render(
        <ThemeProvider theme={defaultTheme}>
            <BookDetails book={books.results[0]} isbnReview={fakeIsbn}/>
        </ThemeProvider>)

        expect(getByText(/Total de avaliações GoodReads:/).lastChild.textContent).toBe(" 105")
    });
    
    it('Should not render goodReads rating counts on failed api call', () => {
        const fakeIsbn = { message: "Sem dados suficientes" }
        const { getByText } = render(
        <ThemeProvider theme={defaultTheme}>
            <BookDetails book={books.results[0]} isbnReview={fakeIsbn}/>
        </ThemeProvider>)

        expect(getByText(/Total de avaliações GoodReads:/).lastChild.textContent).toBe(" Sem dados suficientes")
    });
})
