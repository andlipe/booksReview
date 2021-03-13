import React from 'react';
import { render } from '@testing-library/react'
import BookButton from './BookButton';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/theme';

describe('BookButtonComponent', () => {
    it('Should render given text', () => {
        const { getAllByText } = render(
        <ThemeProvider theme={defaultTheme}>
            <BookButton href={"/details"} text={"Ver mais"}/>
        </ThemeProvider>
        )

        expect(getAllByText("Ver mais").length).toEqual(1);
    });
})
