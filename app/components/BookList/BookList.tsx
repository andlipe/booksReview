import React from 'react'
import { BooksContext } from '@contexts/BookContext';
import BookCard from '@components/BookCard/BookCard';
import { BookListContainer } from './styles';


export default function BookList() {
    const { books } = React.useContext(BooksContext)
    const stagger = {
        animate: {
          transition: {
            staggerChildren: 0.5
          }
        }
      };
    return (
        <BookListContainer 
            initial={{ x: 60, opacity: 0 }} 
            animate={{x: 0, opacity: 1}}
            variants={stagger}
            exit={{ x:60, opacity: 0 }}
        >
            {books && books.map(book => (
                <BookCard key={book.isbn} book={book} />
            ))}
        </BookListContainer>
    )
}
