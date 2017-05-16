import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    getTotalProducts() {
        return this.products.length;
    }


    products: Product[] = [
        {
            id: 1,
            name: 'laptop',
            price: 198000,
            description: 'New Mac Pro',
            canBuy: true,
            discount: 0,
            makeDate: Date.now(),
            images: [
                { thumb: 'images/Laptop.png', full: '' }
            ],
            reviews: [
                { stars: 5, author: 'nag@email.com', comment: 'good one' },
                { stars: 2, author: 'indu@email.com', comment: 'costly' }
            ]
        },
        {
            id: 2,
            name: 'mobile',
            price: 8000,
            description: 'New mobile',
            canBuy: false,
            discount: 0,
            makeDate: Date.now(),
            images: [
                { thumb: 'images/Mobile.png', full: '' }
            ],
            reviews: [
                { stars: 5, author: 'nag@email.com', comment: 'good one' },
                { stars: 2, author: 'indu@email.com', comment: 'costly' }
            ]
        }
    ]
}