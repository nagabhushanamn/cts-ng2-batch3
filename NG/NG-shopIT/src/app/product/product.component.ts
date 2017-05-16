
import { Component, Input } from '@angular/core';
import { Review } from '../models/review.model';


@Component({
    selector: 'product-component',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    @Input()
    product: any;
    @Input()
    idx: number;
    qty: number = 1

    currentTab: number = 1;

    newReview: Review = new Review(0, '', ''); // model

    submitNewReview(product: any, event: any, reviewForm: any) {
        event.preventDefault();
        if (reviewForm.invalid) {
            return;
        }
        // if review form-data valid
        product.reviews.push(this.newReview);
        this.newReview = new Review(0, '', '');
        //reviewForm.submitted = false;
    }
    handleTabChange(tabIndex: number, event: any) {
        event.preventDefault();
        this.currentTab = tabIndex;
    }

    isTabSelected(tabIndex: number) {
        return this.currentTab === tabIndex;
    }

    upQty() {
        ++this.qty;
    }
    downQty() {
        --this.qty;
    }

    buy(product: any) {
        console.log(`buying ${product.name} with qty ${this.qty}`);
    }

}