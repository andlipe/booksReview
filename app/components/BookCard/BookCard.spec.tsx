import React from 'react';
import { render } from '@testing-library/react'
import BookCard from './BookCard';
import books from '../../../livros.json';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/theme';

describe('BookCardComponent', () => {
    it('Should render given props', () => {
        const { container, getAllByText } = render(
        <ThemeProvider theme={defaultTheme}>
            <BookCard book={books.results[0]}/>
        </ThemeProvider>
        )
        
        expect(container.querySelector('h3').textContent).toBe('O Xará')
        expect(container.querySelector('span').textContent).toBe('Fevereiro de 2017')

    });
})
