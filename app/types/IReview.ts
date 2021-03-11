export type IReview = {
    average_rating: string;
    id: number;
    isbn: number | null;
    isbn13: string | null;
    ratings_count: number;
    reviews_count: number;
    text_reviews_count: number;
    work_ratings_count: number;
    work_reviews_count: number;
    work_text_reviews_count: number;
    
}