import { Component } from '@angular/core';
import MockFood, { IFood } from './foods.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})

export class ComidaPageComponent {
  //criando uma lista vazia de comidas do tipo interface comidas
  protected foods: IFood[] = [];
  //criando uma variável da comida que estará em foco (foi clicada) do tipo comida
  protected focusedFood?: IFood;

  constructor() {
    this.foods = MockFood;
  }

  //função para definir qual comida está em foco e dizer para o card
  onCardClick = (item: IFood) => {
    this.focusedFood = item;
  }

  //função para dizer que foi salvo
  save = () => {
    alert("Pedido efetuado!");
  }
}
