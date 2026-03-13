import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output()
  text: EventEmitter<void> = new EventEmitter();
  @Input()
  label: string = "";

  onClick = () => {
    this.text.emit();
  }
}
