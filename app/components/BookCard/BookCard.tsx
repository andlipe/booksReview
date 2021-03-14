import React from 'react';
import { BookCardContainer } from './styles';
import Image from 'next/image'
import { IBook }  from '../../types/IBook';
import BookButton from '@components/BookButton/BookButton';
import { BooksContext } from '@contexts/BookContext';

type BookCardProps = {
    book: IBook
}

const BookCard = ( { book }: BookCardProps ) => {
    const { reviews } = React.useContext(BooksContext);
    const [filteredReview] = React.useState(reviews.filter(review => review.isbn13 === book.isbn))
    
    return (
        <BookCardContainer>
            <Image src={`${book.cover.url}`} width={300} height={350} alt={`Capa do livro ${book.name}`} />
            <h3>{book.name}</h3>
            <p>Edição: <span>{book.edition}</span></p>
            <p>Media de avaliações Tag: <span>
                        {(book.totalRatings / book.numRatings).toFixed(2)}
                </span>
            </p>
            <p>Media de avaliações GoodReads: {filteredReview[0] ? 
                <span>
                    {filteredReview[0].average_rating}
                </span>
                :
                <span>
                    Sem dados suficientes
                </span>   
                }
            </p>
            <BookButton href={`/details/${book.isbn}`} text={"Ver mais"}/>
        </BookCardContainer>
    );
}

export default BookCard;
