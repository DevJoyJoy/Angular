import { Component } from '@angular/core';
import MockProduct, { IProduct} from './products.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})

export class MercadoPageComponent {
  protected products: IProduct[] = [];

  constructor() {
    this.products = MockProduct;
  }
}
