import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Afonso";
  avatarURL = "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png";
  apelido = "";

  mostrarApelido(): void {
    alert(this.apelido)
  }
}
