import React from 'react';
import { render } from '@testing-library/react'
import BookCard from './BookCard';
import books from '../../../livros.json';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/theme';
import { BooksProvider } from '@contexts/BookContext';

describe('BookCardComponent', () => {
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
    it('Should render given props', () => {

        const { container, getByText } = render(
        <BooksProvider books={books.results} reviews={fakeIsbnGoodReads.books}>
            <ThemeProvider theme={defaultTheme}>
                <BookCard book={books.results[0]}/>
            </ThemeProvider>
        </BooksProvider>
        )
        
        expect(container.querySelector('h3').textContent)
        .toBe('O Xará')
        expect(getByText(/Edição:/).lastChild.textContent)
        .toBe('Fevereiro de 2017')
        expect(getByText(/Media de avaliações Tag:/).lastChild.textContent)
        .toBe('4.39')
        expect(getByText(/Media de avaliações GoodReads:/).lastChild.textContent)
        .toBe('3.99')
    });

    it('Should not render GoodReads reviews if its not given', () => {
        const { getByText } = render(
            <BooksProvider books={books.results} reviews={fakeIsbnGoodReads.books}>
                <ThemeProvider theme={defaultTheme}>
                    <BookCard book={books.results[1]}/>
                </ThemeProvider>
            </BooksProvider>
        )
        
        expect(getByText(/Media de avaliações GoodReads:/).lastChild.textContent)
        .toBe('Sem dados suficientes')

    });
    
})
