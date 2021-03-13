import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import BookList from '@components/BookList/BookList';
import Header from '@components/Header/Header';
import { BooksProvider } from '@contexts/BookContext';
import { IBook } from '../app/types/IBook';
import { getBooks } from 'pages/api/books'
interface HomeProps {
  books: IBook[];
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Index | TagBook </title>
      </Head>
      <Header path={'index'}/>
      <BooksProvider books={props.books}>
        <BookList />
      </BooksProvider>
    </>
  )
}

export const getStaticProps: GetStaticProps =  async (context) => {

  const fetchBookList = getBooks() 
  const books = fetchBookList;  

    return {
      props: {
        books
      }
    }
} 
