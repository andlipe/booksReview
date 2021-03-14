import React from 'react';
import { render } from '@testing-library/react'
import booksArray from '../../../livros.json';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/theme';
import BookList from './BookList';
import { BooksProvider } from '@contexts/BookContext';

describe('BookListComponent', () => {
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
    it('Should render a list of books', () => {
        const { container } = render(
            <ThemeProvider theme={defaultTheme}>
                <BooksProvider books={booksArray.results} reviews={fakeIsbnGoodReads.books}>
                    <BookList />
                </BooksProvider>
            </ThemeProvider>
        )
        expect(container.querySelector('article').childElementCount).toEqual(booksArray.results.length)
    });
    
});