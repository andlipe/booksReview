import Link from 'next/link';
import React from 'react';
import { A } from './styles';

const BookButton = ({ href, text }) => {
    return (
        <Link href={href}> 
                <A>{text}</A>
        </Link>
    );
}

export default BookButton;
