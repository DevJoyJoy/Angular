import { Injectable } from '@angular/core';
import { Api } from './api';
import { LoginDto } from './userInterface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PixelApi extends Api {

  public getPixels = () : Observable<IPixel[]> => {
    return this.client.get<IPixel[]>(`${this.URL}/pixel`).pipe();
  }

  public updatePixel = (data: IPixel) : Observable<void> => {
    return this.client.post<void>(`${this.URL}/pixel`, data).pipe();
  }
}
