import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-terceiro-componente',
  templateUrl: './terceiro-componente.component.html',
  styleUrls: ['./terceiro-componente.component.css']
})
export class TerceiroComponenteComponent {
  @Input() sobrenome!: string;
  @Input() membrosFamilia!: string[];
  
  membroSelecionado = "";
}
