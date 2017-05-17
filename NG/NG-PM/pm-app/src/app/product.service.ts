import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
  apiUrl: string = "http://0.0.0.0:3000/api/products";
  constructor(private _http: Http) { }

  getProducts(): Observable<Array<any>> {
    return this._http.get(this.apiUrl)
      .map((resp) => resp.json())
    //.do(data => console.log('All: ' + JSON.stringify(data)))
    //.catch(this.handleError);
  }

  private handleError(error: Response) {
    //... 
  }


}
