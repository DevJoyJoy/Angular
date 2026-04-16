import { Component, signal } from '@angular/core';
import { RoomApi } from '../../domain/room.api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-page',
  imports: [],
  templateUrl: './room-page.html',
  styleUrl: './room-page.css',
})
export class RoomPage {
  constructor(private roomApi: RoomApi, private router: ActivatedRoute) { }

  private idRoom : string = ""
  protected pixels = signal<IPixel[][]>([])
  
  ngOnInit(): void {
    this.router.paramMap.forEach(param => {
      this.idRoom = param.get("id") ?? "";
    })

    let lines = []
    for (let i = 0; i < 50; i++){
      let items: IPixel[];
      for (let j = 0; j < 50; j++){
        items.push({
          color: 'gray',
          x: j,
          y: i
        })
      }
      lines.push(items);
    }
    this.pixels.set(lines);
    this.roomApi.connect(this.idRoom);
    this.roomApi.pixelsObservable.subscribe(res => {

    })
  }
}
