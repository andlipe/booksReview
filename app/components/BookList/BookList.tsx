import React from 'react'
import { BooksContext } from '../../../app/contexts/BookContext';
import BookCard from '../BookCard/BookCard';
import { BookListContainer } from './styles';


export default function BookList() {
    const { books } = React.useContext(BooksContext)

    return (
        <BookListContainer>
            {books && books.map(book => (
                <BookCard key={book.isbn} book={book} />
            ))}
        </BookListContainer>
    )
}
