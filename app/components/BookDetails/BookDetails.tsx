import { IBook } from '@types/IBook';
import React from 'react';
import { BookDetailsContainer } from './styles';

const BookDetails = ({book, isbnReview}) => {
    return (
        <BookDetailsContainer>
            <img src={book.cover.url}/>
            <h3>{book.name}</h3>
            <span>{book.author}</span>
            <span>{book.edition}</span>
            <span>{book.curator}</span>
            <span>{book.pages}</span>
            <span>{book.numRatings}</span>
            {isbnReview.ratings_count ? 
            <span>{isbnReview.ratings_count}</span>
            : <span>Sem dados suficientes</span>}
        </BookDetailsContainer>
    );
}

export default BookDetails;
