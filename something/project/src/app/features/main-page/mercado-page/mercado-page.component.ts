import { Component } from '@angular/core';
import { IProduct } from './products.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  //criando uma lista vazia de comidas do tipo interface comidas
  protected products: IProduct[] = [];
  //criando uma variável da comida que estará em foco (foi clicada) do tipo comida
  protected focusedProduct?: IProduct;
  
  //função para definir qual comida está em foco e dizer para o card
  onCardClick = (item: IProduct) => {
    this.focusedProduct = item;
  }

  //função para dizer que foi salvo
  save = () => {
    alert("Pedido efetuado!");
  }

}

