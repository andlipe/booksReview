import React from 'react';
import { render } from '@testing-library/react'
import Header from './Header';

describe('HeaderButton', () => {
    it('Should render back button on details page', () => {
        const { getAllByRole } = render(<Header path={'details'}/> )
        expect(getAllByRole('link').length).toEqual(1)
    });
    
    it('Should not render back button on index page', () => {
        const { container } = render(<Header path={'index'}/> )
        expect(container.querySelector('header').childElementCount).toEqual(1)
    });
    
})
