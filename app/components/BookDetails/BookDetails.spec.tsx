import React from 'react';
import { render } from '@testing-library/react'
import books from '../../../livros.json';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/theme';
import BookDetails from './BookDetails';
import { BooksProvider } from '@contexts/BookContext';
describe('BookDetailsComponent', () => {
    const fakeIsbnGoodReads = {
        books:
            [{
                average_rating:"3.99",
                id:34136725,
                isbn:"852506355X",
                isbn13:"9788525063557",
                ratings_count:132,
                reviews_count:202,
                text_reviews_count:10,
                work_ratings_count:240115,
                work_reviews_count:384045,
                work_text_reviews_count:12222
            }]
        }
    it('Should render goodReads rating counts on succed api call', () => {
        
        const { getByText } = render(
        
            <ThemeProvider theme={defaultTheme}>
                <BooksProvider books={books.results} reviews={fakeIsbnGoodReads.books}>
                <BookDetails book={books.results[0]} />
                </BooksProvider>
            </ThemeProvider>
        )

        expect(getByText(/Total de avaliações GoodReads:/).lastChild.textContent).toBe(" 132")
    });
    
    it('Should not render goodReads rating counts on failed api call', () => {
        const fakeIsbn = { message: "Sem dados suficientes" }
        const { getByText } = render(
        <ThemeProvider theme={defaultTheme}>
            <BooksProvider books={books.results} reviews={fakeIsbnGoodReads.books}>
            <BookDetails book={books.results[1]} />
            </BooksProvider>
        </ThemeProvider>
        )

        expect(getByText(/Total de avaliações GoodReads:/).lastChild.textContent).toBe(" Sem dados disponíveis")
    });
})
