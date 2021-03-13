import React from 'react';
import { render } from '@testing-library/react'
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/theme';

describe('HeaderButton', () => {
    it('Should render back button on details page', () => {
        const { getAllByRole } = render(
        <ThemeProvider theme={defaultTheme}>
            <Header path={'details'}/>
        </ThemeProvider> )
        expect(getAllByRole('link').length).toEqual(1)
    });
    
    it('Should not render back button on index page', () => {
        const { container } = render(
        <ThemeProvider theme={defaultTheme}>
            <Header path={'index'}/>
        </ThemeProvider> 
        )
        expect(container.querySelector('header').childElementCount).toEqual(1)
    });
    
})
