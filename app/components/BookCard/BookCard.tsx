import React from 'react';
import Link from 'next/link'
import { BookCardContainer } from './styles';
import Image from 'next/image'
import { IBook }  from '../../types/IBook';

type BookCardProps = {
    book: IBook
}

const BookCard = ( { book }: BookCardProps ) => {
    return (
        <BookCardContainer>
            <Image src={`${book.cover.url}`} width={300} height={350} />
            <h3>{book.name}</h3>
            <p>Edição: <span>{book.edition}</span></p>
            <Link href={`/details/${book.isbn}`}> 
                <a>Detalhes</a>
            </Link>
        </BookCardContainer>
    );
}

export default BookCard;
