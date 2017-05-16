

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,ProductListComponent,ProductComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}