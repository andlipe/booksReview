import React from 'react'
import { BooksContext } from '../../app/contexts/BookContext';
import Link from 'next/link'


export default function BookList() {
    const { books } = React.useContext(BooksContext)

    return (
        <div>
        {books && books.map(book => (
        <div key={book.isbn}>
            <h3>{book.name}</h3>
            <p>{book.edition}</p>
            <Link href={`/details/${book.isbn}`}> 
                <a>Detalhes</a>
            </Link>
        </div>
        ))}
        </div>
    )
}
