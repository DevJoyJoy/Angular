import { Component } from '@angular/core';
import MockFood, { IFood } from './foods.mock';

@Component({
  selector: 'app-commida',
  templateUrl: './commida.component.html',
  styleUrls: ['./commida.component.css']
})

export class CommidaComponent {
  protected foods: IFood[] = [];

  constructor() {
    this.foods = MockFood;
  }
}
