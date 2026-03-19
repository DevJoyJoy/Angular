import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  // userName: string = "Sr. Mistério";

  @Output()
  Change: EventEmitter<string>= new EventEmitter();

  @Input()
  label: string = "";
  @Input()
  Value: string = "";
  @Input()
  name: string = "";

  changed = (event: any) => {
    // console.log(event)
    this.name = event.srcElement.value;
    console.log(this.name);
    this.Change.emit(this.name);
  }
}