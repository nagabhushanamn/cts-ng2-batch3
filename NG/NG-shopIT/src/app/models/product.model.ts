
import { Review } from './review.model';

export class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    canBuy: boolean;
    discount: number;
    makeDate: any;
    images: Array<any>;
    reviews: Array<Review>;

}