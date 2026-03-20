
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../products.mock';

@Component({
  selector: 'app-mercado-modal',
  templateUrl: './mercado-modal.component.html',
  styleUrls: ['./mercado-modal.component.css']
})

export class MercadoModalComponent {
  @Input()
  product?: IProduct

  @Output()
  Exit: EventEmitter<void> = new EventEmitter();
  // exit: boolean = false

  exitModal(){
    console.log("Fechando Modal")
    this.Exit.emit();
    console.log(this.Exit)
  }
}
