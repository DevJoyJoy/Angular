import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  isClicked = false;
  
  click: EventEmitter<void> = new EventEmitter();

  onClick = () => {
    this.isClicked = !this.isClicked;
    this.click.emit();
  }
}




