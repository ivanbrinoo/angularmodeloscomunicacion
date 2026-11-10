import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Peliculas } from '../../models/pelicula';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cine-component',
  standalone: false,
  styleUrl: './cine-component.css',
  templateUrl: './cine-component.html',
})
export class CineComponent implements OnInit{
pelicula: Peliculas[] = [];
  


constructor(
    private _cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {}

  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

async ngOnInit(): Promise<void> {
  let path = "documents/cine.json";
  let response = await fetch(path);
  let datos = await response.json();
  console.log("DATOS RECIBIDOS:", datos);
  console.log("¿Es un array?:", Array.isArray(datos));
  console.log(datos);
  for(let pelicula of datos){
    let peli = new Peliculas(
      pelicula.Titulo,
      pelicula.Fecha_Estreno,
      pelicula.Director,
      pelicula.YouTube,
      pelicula.Argumento
    );
    this.pelicula.push(peli);
  }
  this._cdr.detectChanges();

}
}
