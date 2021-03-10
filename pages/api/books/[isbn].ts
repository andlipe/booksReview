import type { NextApiRequest, NextApiResponse } from 'next'
import books from '../../../livros.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { isbn } = req.query;
        const booksArray = books.results

        const filteredBook = booksArray.filter(book => book.isbn === String(isbn))

        return res.status(200).json(filteredBook);
    }
        return res.status(401).json({ message: "Method not allowed"});
    
}  