import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  arraynumeros: number[];
  @ViewChild("cajanumero") cajanumero!: ElementRef;
  suma: number = 0;


  constructor(){
    this.arraynumeros = [5, 9, 4, 3, 0 , 2, 1]
  }
  crearNumero(): void {
    let num = parseInt(this.cajanumero.nativeElement.value);
    this.arraynumeros.push(num);
  }
  sumarNumeros(numero: number): void {
    this.suma += numero;

  }
}
