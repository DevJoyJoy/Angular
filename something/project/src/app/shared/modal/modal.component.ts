import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  //esses inputs serão coletados quando o modal for incluso na página
  @Input()
  Title: string = ""
  @Input()
  Confirmation: boolean = false;
  @Input()
  SaveLabel?: string;


  //quando os eventos mencionados acontecerem, o modal vai fechar ou salvar as alterações que foram feitas
  @Output()
  onClose: EventEmitter<void> = new EventEmitter();
  @Output()
  onSave: EventEmitter<void> = new EventEmitter();

  toggleClose = () => {
    this.onClose.emit();
    console.log("oii");
  }

  toggleSave = () => {
    this.onSave.emit();
  }
}