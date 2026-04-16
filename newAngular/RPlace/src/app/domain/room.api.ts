import { Injectable } from '@angular/core';
import { Api } from './api';

import { CanvasAction, MessageType, WebSocketMessage } from './interface/room';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class RoomApi extends Api{
  private wsUrl = "ws://10.234.197.18:5294/api/room";
  private pixelSubject = new Subject<CanvasAction>();
  private socket!: WebSocket;

  public pixelsObservable: Observable<CanvasAction> = this.pixelSubject.asObservable();

  public connect = (roomId: string) => {
    const token = sessionStorage.getItem("token");
    if (!token){
      return;
    }

    this.socket = new WebSocket(`${this.wsUrl}/${roomId}?token=${encodeURIComponent(token)}`);
    this.socket.onopen = (event) => {
      console.log("Connection Created!");
    }

    this.socket.onmessage = (event: MessageEvent) => {
      const message: WebSocketMessage<any> = JSON.parse(event.data);

      switch (message.Type){
        case MessageType.Message:
          console.log(message.Data);
          break;

        case MessageType.FirstConnection:
          this.pixelSubject.next({type: 'FULL_LOAD', payload: message.Data});
          break;

        case MessageType.PlayerAction:
          this.pixelSubject.next({type: 'SINGLE_LOAD', payload: message.Data})
          break;

        default:
          break;
      }
    }

    this.socket.onerror = (err) => {
      console.log("ERROR!", err);
    }

    this.socket.onclose = () => {
      console.log("Connection Ended!");
    } 
  }

  public closeConnection = () => {
    if(this.socket){
      this.socket.close();
    }
  }

  public updatePixel = (data: IPixel) => {
    if(this.socket.readyState == WebSocket.OPEN){
      this.socket.send(JSON.stringify(data));
    } else {
      console.log("WebSocket not Connected!");
    }
  }
}
