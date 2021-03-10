import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { IBook } from '../app/types/IBooks';
interface HomeProps {
  bookList: Array<IBook>
}

export default function Home(props: HomeProps) {
  const [books, setBooks] = React.useState(props.bookList);
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {books.map((book) => (
          <div key={book.isbn}>
            <h3>{book.name}</h3>
            <p>{book.edition}</p>
          </div>
        ))}
      </div>
      <h1></h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fetchBookList = await fetch('http://localhost:3005/api/books')
    .then(response => response.json());
  const bookList = fetchBookList.results;  
    return {
      props: {
        bookList,
      }
    }
} 
