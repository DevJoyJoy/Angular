import { Component } from '@angular/core';
import MockProduct, { IProduct} from './products.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})

export class MercadoPageComponent {
  protected products: IProduct[] = [];
  clickedItem?: IProduct
  isClicked:boolean = false

  constructor() {
    this.products = MockProduct;
  }

  openModal(product:IProduct){
    console.log(product.name)
    this.clickedItem = product
    this.isClicked = true
  }

  closeModal () {
    this.isClicked = false
  }
}
