import { Component, Input } from '@angular/core';
import { IProduct } from '../products.mock';

@Component({
  selector: 'app-mercado-card',
  templateUrl: './mercado-card.component.html',
  styleUrls: ['./mercado-card.component.css']
})
export class MercadoCardComponent {
  @Input()
  product!: IProduct
}
