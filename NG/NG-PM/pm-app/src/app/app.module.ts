import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDiscountPipe } from './product-discount.pipe';
import { ProductService } from './product.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDiscountPipe,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: WelcomeComponent }
    ], { useHash: true })
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
