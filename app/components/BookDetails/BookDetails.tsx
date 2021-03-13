import { IBook } from '../../types/IBook';
import React from 'react';
import { BookDetailsContainer } from './styles';
import Image from 'next/image';

const BookDetails = ({book, isbnReview}) => {
    return (
        <BookDetailsContainer>
            <Image src={book.cover.url} width={400} height={450} alt={`Capa do livro ${book.name}`}/>
            <section>
                <h3>{book.name}</h3>
                <p>Autor: <span>{book.author}</span></p>
                <p>Edição: <span>{book.edition}</span></p>
                <p>Curador(a): <span>{book.curator}</span></p>
                <p>Número de páginas: <span>{book.pages}</span></p>
                <p>Total de avaliações Tag: <span>{book.numRatings}</span></p>
                <p>Total de avaliações GoodReads: 
                {isbnReview.ratings_count > 0 ? 
                <span> {isbnReview.ratings_count}</span>
                : <span> {isbnReview.message}</span>}
                </p>
            </section>
        </BookDetailsContainer>
    );
}

export default BookDetails;
