import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-numero-component',
  standalone: false,
  styleUrl: './hijo-numero-component.css',
  templateUrl: './hijo-numero-component.html',
})
export class HijoNumeroComponent implements OnInit{
  @Input() numero!: number;
  @Output() sumarNumeros: EventEmitter<any> = new EventEmitter();
  doble!: number;
  
  devolverNumero(): void {
    this.sumarNumeros.emit(this.numero);
  }

  ngOnInit(): void{
    this.doble = this.numero * 2;
  }


}
