import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugadores-component',
  standalone: false,
  styleUrl: './jugadores-component.css',
  templateUrl: './jugadores-component.html',
})
export class JugadoresComponent implements OnInit {
  arrayjugador: Jugador [] = [];

  async cargarJugadores(): Promise<void> {
    let path = "documents/jugadores.json";
    let response = await fetch(path);
    let datos = await response.json();
    for (let elemento of datos){
      let jugador = new Jugador(elemento.jugador, elemento.imagen);
      this.arrayjugador.push(jugador);
    }
    this._cdr.detectChanges();
  }
  async ngOnInit(): Promise<void> {
    await this.cargarJugadores();
  }
  
  constructor(
    private _cdr: ChangeDetectorRef
  ){}
}