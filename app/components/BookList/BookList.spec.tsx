import React from 'react';
import { render } from '@testing-library/react'
import booksArray from '../../../livros.json';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/theme';
import BookList from './BookList';
import { BooksProvider } from '@contexts/BookContext';

describe('BookListComponent', () => {
    it('Should render a list of books', () => {
        const { container } = render(
            <ThemeProvider theme={defaultTheme}>
                <BooksProvider books={booksArray.results}>
                    <BookList />
                </BooksProvider>
            </ThemeProvider>
        )
        expect(container.querySelector('article').childElementCount).toEqual(booksArray.results.length)
    });
    
});