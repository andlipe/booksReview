import React from 'react';
import { GetServerSideProps } from 'next';
import { IReview } from '../../app/types/IReview';
import { IBook } from '../../app/types/IBook';

type HomeProps = {
    reviews: IReview;
    book: IBook
}

export default function details(props: HomeProps) {
    const [isbnReview] = React.useState(props.reviews);
    const [book] = React.useState(props.book);


    return (
        <div>
            <h3>{book.name}</h3>
            <img src={book.cover.url}/>
            <span>{book.author}</span>
            <span>{book.edition}</span>
            <span>{book.curator}</span>
            <span>{book.pages}</span>
            <span>{book.numRatings}</span>
            <span>{isbnReview.ratings_count}</span>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {isbn} = context.query;
    const fetchBook = await fetch(`http://localhost:3005/api/books/${isbn}`).then(response => response.json());
    const fetchReviewsFromGoodReads = await fetch(`http://localhost:3000/book/review_counts.json?isbns=${isbn}`)
        .then(response => response.json());
    const reviews = fetchReviewsFromGoodReads.books[0];
    const book = fetchBook[0];
    return {
        props: {
            reviews,
            book
        }
    }
}

