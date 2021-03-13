import React from 'react';
import { render } from '@testing-library/react'
import BookButton from './BookButton';

describe('BookButtonComponent', () => {
    it('Should render given text', () => {
        const { getAllByText } = render(<BookButton href={"/details"} text={"Ver mais"}/>)

        expect(getAllByText("Ver mais").length).toEqual(1);
    });
})
