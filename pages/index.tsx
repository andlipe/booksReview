import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import BookList from '@components/BookList/BookList';
import Header from '@components/Header/Header';
import { BooksProvider } from '@contexts/BookContext';
import { IBook } from '../app/types/IBook';
interface HomeProps {
  books: Array<IBook>
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Index | TagBook </title>
      </Head>
      <Header />
      <BooksProvider books={props.books}>
        <BookList />
      </BooksProvider>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fetchBookList = await fetch('http://localhost:3005/api/books')
    .then(response => response.json());
  const books = fetchBookList;  
    return {
      props: {
        books,
      }
    }
} 
