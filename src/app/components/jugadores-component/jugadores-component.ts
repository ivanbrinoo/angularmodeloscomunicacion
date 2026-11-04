import { ChangeDetectorRef, Component } from '@angular/core';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugadores-component',
  standalone: false,
  styleUrl: './jugadores-component.css',
  templateUrl: './jugadores-component.html',
})
export class JugadoresComponent {
  arrayjugador: Jugador [] = [];

  async mostrarJugadores(): Promise<void> {
    let path = "documents/jugadores.json";
    let response = await fetch(path);
    let datos = await response.json();
    for (let elemento of datos){
      let jugador = new Jugador(elemento.jugador, elemento.imagen);
      this.arrayjugador.push(jugador);
    }
    this._cdr.detectChanges();
  }
  constructor(
    private _cdr: ChangeDetectorRef
  ){}
}