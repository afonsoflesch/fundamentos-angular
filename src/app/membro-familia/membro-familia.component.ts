import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-membro-familia',
  templateUrl: './membro-familia.component.html',
  styleUrls: ['./membro-familia.component.css']
})
export class MembroFamiliaComponent {
  @Input() nome!: string;
  @Output () childEvent = new EventEmitter<string>();


  selecionarMembro(): void {
    this.childEvent.emit(this.nome)
  }
}
