import React from 'react';
import { GetServerSideProps } from 'next';
import { IReview, IReviewError } from '../../app/types/IReview';
import { IBook } from '../../app/types/IBook';
import Header from '@components/Header/Header';
import BookDetails from '@components/BookDetails/BookDetails';
import Head from 'next/head';

type HomeProps = {
    reviews: IReview | IReviewError;
    book: IBook
}

export default function details(props: HomeProps) {
    const [isbnReview] = React.useState(props.reviews);
    const [book] = React.useState(props.book);


    return (
        <>  
            <Head>
                <title>Detalhes | TagBook</title>
            </Head>
            <Header />
            <BookDetails book={book} isbnReview={isbnReview}/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {isbn} = context.query;
    const goodreads_api_url = process.env.GOODREADS_API_URL;
    const books_api_url = process.env.BOOKS_API_URL;
    let reviews;

    const fetchBook = await fetch(`${books_api_url}/api/books/${isbn}`).then(response => response.json());
    await fetch(`${goodreads_api_url}/book/review_counts.json?isbns=${isbn}`)
        .then(response => response.json())
        .then(result => reviews = result.books[0])
        .catch(err => reviews = new Object({ message: "Sem dados suficientes" }));
    const book = fetchBook[0];
    return {
        props: {
            reviews,
            book
        }
    }
}

