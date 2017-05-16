

export class Review {
    stars: number;
    author: string;
    comment: string;

    constructor(stars: number, author: string, comment: string) {
        this.stars = stars;
        this.author = author;
        this.comment = comment;
    }

}