import React from "react";
import { IBook } from "../types/IBook";

interface BooksProviderProps {
    children: React.ReactNode;
    books: Array<IBook>;
}

interface BookContextData {
    books: Array<IBook>;
}

export const BooksContext = React.createContext({} as BookContextData);

export function BooksProvider({children, ...rest}: BooksProviderProps) {
    const [books, setBooks] = React.useState([]);

    React.useEffect(() => {
        setBooks(rest.books)
    },[])
    
    return (

        <BooksContext.Provider 
        value={{
            books
        }}>
            {children}
        </BooksContext.Provider>
    )
}