import { Component } from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductList {
    getTotalProducts() {
        return this.products.length;
    }
    products: any[] = [
        {
            id: 1,
            name: 'laptop',
            price: 198000,
            description: 'New Mac Pro',
            canBuy: true,
            makeDate: Date.now()
        },
        {
            id: 2,
            name: 'mobile',
            price: 8000,
            description: 'New mobile',
            canBuy: false,
            makeDate: Date.now()
        }
    ]
}