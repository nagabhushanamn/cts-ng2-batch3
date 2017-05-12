
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    
        <div class="container"> 
            <div class="page-header">{{title}}</div>
            <product-list></product-list>
        </div>
    
    `
})
export class AppComponent {
    title: string = "shopIT";
}
