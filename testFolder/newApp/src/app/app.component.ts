import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FirstApp';
  count = 0;
  userName = "Escreva sua Frase";

  foiClickado = () => {
    this.count++;
  }

  atualizaUser = (event: string) => {
    console.log("Atualizando Usuário");
    this.userName = event;
  }
}