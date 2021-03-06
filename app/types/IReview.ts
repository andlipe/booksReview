export type IReview = {
    average_rating: string;
    id: number;
    isbn: string | null;
    isbn13: string | null;
    ratings_count: number;
    reviews_count: number;
    text_reviews_count: number;
    work_ratings_count: number;
    work_reviews_count: number;
    work_text_reviews_count: number;
}

export type IReviewError = {
    message: string;
}