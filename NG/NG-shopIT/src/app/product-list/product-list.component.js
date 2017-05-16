"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.products = [
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
        ];
    }
    ProductListComponent.prototype.getTotalProducts = function () {
        return this.products.length;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css']
    })
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map