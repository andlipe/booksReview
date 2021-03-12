import React from 'react';
import Link from 'next/link'
import { BookCardContainer } from './styles';
import Image from 'next/image'
import { IBook }  from '../../types/IBook';
import BookButton from '@components/BookButton/BookButton';

type BookCardProps = {
    book: IBook
}

const BookCard = ( { book }: BookCardProps ) => {
    return (
        <BookCardContainer>
            <Image src={`${book.cover.url}`} width={300} height={350} alt={`Capa do livro ${book.name}`} />
            <h3>{book.name}</h3>
            <p>Edição: <span>{book.edition}</span></p>
            <BookButton isbn={book.isbn}/>
        </BookCardContainer>
    );
}

export default BookCard;
