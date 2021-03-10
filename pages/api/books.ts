import type { NextApiRequest, NextApiResponse } from 'next'
import books from '../../livros.json';



type BookType = {
    objectId: string,
    pages: number, 
    createdAt: string,
    updatedAt: string,
    author: string,
    name: string,
    isbn: string,
    curator: string,
    cover:{
        __type: string;
        name: string;
        url:string;
    },
    edition: string,
    blocked: boolean,
    numRatings: number,
    totalRatings: number,
}
type ResponseType = {
  results: Array<BookType>
}

type MessageType = {
  message: string;
}

export default (req: NextApiRequest, res: NextApiResponse<ResponseType | MessageType>) => {
  if (req.method === 'GET') {
    return res.status(200).json(books);
  }
    return res.status(401).json({ message: "Method not allowed"});
  
}
