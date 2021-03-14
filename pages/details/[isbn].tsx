import React from 'react';
import { GetServerSideProps } from 'next';
import { IBook } from '../../app/types/IBook';
import Header from '@components/Header/Header';
import BookDetails from '@components/BookDetails/BookDetails';
import Head from 'next/head';
import { BooksProvider } from '@contexts/BookContext';

type HomeProps = {
    book: IBook
}

export default function details(props: HomeProps) {
    const [book] = React.useState(props.book);

    return (
        <>  
            <Head>
                <title>Detalhes | TagBook</title>
            </Head>
            <Header path={'details'} />
            <BookDetails book={book} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {isbn} = context.query;
    const books_api_url = process.env.BOOKS_API_URL;

    const fetchBook = await fetch(`${books_api_url}/api/books/${isbn}`).then(response => response.json());
    
    const book = fetchBook[0];
    return {
        props: {
            book
        }
    }
}

