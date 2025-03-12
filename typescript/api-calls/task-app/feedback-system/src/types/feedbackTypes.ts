export enum Rating {
    ONE = 1,
    TWO,
    THREE,
    FOUR,
    FIVE,
}

export interface Feedback {
    id: number;
    name: string;
    email: string;
    date: string;
    foodRating: Rating;
    serviceRating: Rating;
    ambienceRating: Rating;
    comments?: string;
}
