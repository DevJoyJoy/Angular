import { Component, Input } from '@angular/core';
import { IFood } from '../foods.mock';


@Component({
  selector: 'app-item-cardFoods',
  templateUrl: './item-cardFoods.component.html',
  styleUrls: ['./item-cardFoods.component.css']
})
export class ItemCardFoodsComponent {
   @Input()
   infofood: IFood[] = [];

}
