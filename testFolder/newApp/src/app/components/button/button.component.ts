import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  isClicked = false;
  @Output()
  click: EventEmitter<void> = new EventEmitter();
  @Input()
  label: string = "";

  onClick = () => {
    this.isClicked = !this.isClicked;
    this.click.emit();
  }
}




