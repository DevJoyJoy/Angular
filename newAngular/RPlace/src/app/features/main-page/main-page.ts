import { Component } from '@angular/core';
import { PixelApi } from '../../domain/pixel.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  //faz um array com a variavel
  readonly totalPixels = 150 * 80;
  // pixels = Array(this.totalPixels);
  constructor(private router: Router){}

  ngOnInit(){
    
    let lines: IPixel[][] = [];
    for (let y = 0; y< 50; y++){
      let row : IPixel[] = [];
      for (let x = 0; x < 50; x++){
        row.push({
          color: 'gray',
          x: x,
          y: y
        })
      }
      lines.push(row);
    }
    this.pixels = lines;
    this.loadData();
  }

  protected pixels: IPixel[][] = [];

  loadData(){
    const received: IPixel[] = [
      {x:1,y:1,color:'#111',lastChange:new Date()},
      {x:2,y:1,color:'#634444',lastChange:new Date()},
      {x:3,y:1,color:'#aa9c9c',lastChange:new Date()},
      {x:1,y:2,color:'#111',lastChange:new Date()},
      {x:2,y:2,color:'#b6ef9c',lastChange:new Date()},
      {x:3,y:2,color:'#4c28a2',lastChange:new Date()},
      {x:1,y:3,color:'#5aac79',lastChange:new Date()},
      {x:2,y:3,color:'#e88f8f',lastChange:new Date()},
      {x:3,y:3,color:'#862986',lastChange:new Date()},
    ];
    for (let y = 0; y < 50; y++){
      for (let x = 0; x < 50; x++) {
        let exits = received.find(p => p.x == x && p.y == y);
        if(exits)
          this.pixels[x][y] = exits;
      }
    } 
  }

  updateData(pixel: IPixel){
    this.pixels[pixel.y][pixel.x] = pixel;
  }

}
