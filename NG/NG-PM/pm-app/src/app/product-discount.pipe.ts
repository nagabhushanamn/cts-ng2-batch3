import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productDiscount'
})
export class ProductDiscountPipe implements PipeTransform {

  transform(price: any, args?: any): any {
    if (args) {
      return price - args;
    }
    return price - 1;
  }

}
