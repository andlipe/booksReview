import React from 'react';
import { BookDetailsContainer } from './styles';
import Image from 'next/image';
import { BooksContext } from '@contexts/BookContext';
import { motion } from 'framer-motion';

const BookDetails = ({book}) => {
    const { reviews } = React.useContext(BooksContext);
    const [filteredReview, setFilteredReview] = React.useState([])
    React.useEffect(() => {
        if(reviews !== undefined) {
        setFilteredReview(reviews.filter(review => review.isbn13 === book.isbn))
        }
    },[reviews])
    

    return (
        <BookDetailsContainer
        initial='initial' animate='animate' exit={{ opacity: 0 }}
        >
            <Image src={book.cover.url} width={400} height={450} alt={`Capa do livro ${book.name}`}/>
            <motion.section 
                initial={{ x:60, opacity:0}} animate={{x:0, opacity:1}}
            >
                <h3>{book.name}</h3>
                <p>Autor: <span>{book.author}</span></p>
                <p>Edição: <span>{book.edition}</span></p>
                <p>Curador(a): <span>{book.curator}</span></p>
                <p>Número de páginas: <span>{book.pages}</span></p>
                <p>Total de avaliações Tag: <span>{book.numRatings}</span></p>
                <p>Total de avaliações GoodReads: 
                {filteredReview.length > 0 ? 
                <span> {filteredReview[0].ratings_count}</span>
                : <span> Sem dados disponíveis</span>}
                </p>
            </motion.section>
        </BookDetailsContainer>
    );
}

export default BookDetails;
