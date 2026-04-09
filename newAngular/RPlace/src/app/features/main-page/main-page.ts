import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  //faz um array com a variavel
  readonly totalPixels = 150 * 80;
  pixels = Array(this.totalPixels);
}
