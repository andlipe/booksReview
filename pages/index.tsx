import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import BookList from '../app/components/BookList';
import { BooksProvider } from '../app/contexts/BookContext';
import { IBook } from '../app/types/IBooks';
interface HomeProps {
  books: Array<IBook>
}

export default function Home(props: HomeProps) {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        
      </header>
      <BooksProvider books={props.books}>
        <BookList />
      </BooksProvider>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fetchBookList = await fetch('http://localhost:3005/api/books')
    .then(response => response.json());
  const books = fetchBookList.results;  
    return {
      props: {
        books,
      }
    }
} 
