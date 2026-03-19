import { Component, Input } from '@angular/core';
import { IProduct } from '../products.mock';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
   @Input()
   product!: IProduct

}
