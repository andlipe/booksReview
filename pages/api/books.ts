import type { NextApiRequest, NextApiResponse } from 'next'
import books from '../../livros.json';
import { IBook } from "../../app/types/IBooks";

type IResponse = {
  results: Array<IBook>
}

type IMessage = {
  message: string;
}

export default (req: NextApiRequest, res: NextApiResponse<IResponse | IMessage>) => {
  if (req.method === 'GET') {
    return res.status(200).json(books);
  }
    return res.status(401).json({ message: "Method not allowed"});
  
}
