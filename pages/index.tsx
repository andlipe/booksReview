import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import BookList from '@components/BookList/BookList';
import Header from '@components/Header/Header';
import { BooksProvider } from '@contexts/BookContext';
import { IBook } from '../app/types/IBook';
import { getBooks } from 'pages/api/books'
import { IReview } from '../app/types/IReview';
interface HomeProps {
  books: IBook[];
  reviewsArray: IReview[]
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Index | TagBook </title>
      </Head>
      <Header path={'index'}/>
        <BookList />
    </>
  )
}

export const getStaticProps: GetStaticProps =  async (context) => {
  const goodreads_api_url = process.env.GOODREADS_API_URL;
  const fetchBookList = getBooks();
  const books = fetchBookList;  
  var reviewsArray = [];
  const promiseReviews = books.map(book =>
    fetch(`${goodreads_api_url}/book/review_counts.json?isbns=${book.isbn}`)
      .then(response => response.json())
      .then((result) => reviewsArray.push(result.books[0]))
      .catch(err => new Object({ message: "Sem dados suficientes" })
      )
      )
  await Promise.all(promiseReviews)

  return {
      props: {
        books,
        reviewsArray
      }
    }
} 
