import type { NextApiRequest, NextApiResponse } from 'next'
import books from '../../livros.json';
import { IBook } from "../../app/types/IBooks";

type IMessage = {
  message: string;
}

export default (req: NextApiRequest, res: NextApiResponse<Array<IBook> | IMessage>) => {
  if (req.method === 'GET') {
    let meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];

    let bookList = books.results;

    bookList.sort((a,b) => {
      let separateMonthAndYearA = a.edition.split(' de ');
      let yearFromA = separateMonthAndYearA[1];
      let monthFromA = meses.findIndex((mes) => mes === separateMonthAndYearA[0])
      let dateA = +new Date(Number(yearFromA), monthFromA+1);

      let separateMonthAndYearB = b.edition.split(' de ');
      let yearFromB = separateMonthAndYearB[1];
      let monthFromB = meses.findIndex((mes) => mes === separateMonthAndYearB[0])
      let dateB = +new Date(Number(yearFromB), monthFromB+1);
      return dateB - dateA
    })

    return res.status(200).json(bookList);
  }
    return res.status(401).json({ message: "Method not allowed"});
  
}
