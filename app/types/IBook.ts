export type IBook = {
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