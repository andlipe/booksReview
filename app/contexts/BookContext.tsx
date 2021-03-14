import { IReview } from "../types/IReview";
import React from "react";
import { IBook } from "../types/IBook";

interface BooksProviderProps {
    children: React.ReactNode;
    books: Array<IBook>;
    reviews: IReview[]
}

interface BookContextData {
    books: Array<IBook>;
    reviews: IReview[]
}

export const BooksContext = React.createContext({} as BookContextData);

export function BooksProvider({children, ...rest}: BooksProviderProps) {
    const [books, setBooks] = React.useState([]);
    const [reviews, setReviews] = React.useState(rest.reviews)
    React.useEffect(() => {
        setBooks(rest.books)
    },[])
    
    return (

        <BooksContext.Provider 
        value={{
            books,
            reviews
        }}>
            {children}
        </BooksContext.Provider>
    )
}