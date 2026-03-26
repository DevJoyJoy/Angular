import { Component } from '@angular/core';
import MockFood, { IFood } from './foods.mock';

@Component({
  selector: 'app-commida',
  templateUrl: './commida.component.html',
  styleUrls: ['./commida.component.css']
})

export class CommidaComponent {
  protected foods: IFood[] = [];
  protected focusedFood?: IFood;

  constructor() {
    this.foods = MockFood;
  }

  onCardClick = (item: IFood) => {
    this.focusedFood = item
  }

  save = () => {
    alert('Pedido efetuado com sucesso!')
  }
}
