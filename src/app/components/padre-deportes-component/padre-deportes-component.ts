import { Component} from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  arraydeportes!: string [];
  mensaje!: string;
  constructor() {
    this.arraydeportes = ["Baloncesto", "Hockey", "Petanca", "Frisby", "Futbol"]
  }

  seleccionarFavorito(data: string): void {
    console.log("Soy el padre" + data)
    this.mensaje = "Tu deporte favorito es: " + data;
  }
}
