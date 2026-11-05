import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-libreria-component',
  standalone: false,
  styleUrl: './libreria-component.css',
  templateUrl: './libreria-component.html',
})
export class LibreriaComponent implements OnInit {
  arraycomics: Comic[] = []
  

  
  constructor(
    private _cdr: ChangeDetectorRef
  ) {}
  
  async ngOnInit(): Promise<void> {
    let path = "documents/comics.json";
    let response = await fetch(path);
    let datos = await response.json();
    for (let elemento of datos){
      let comic = new Comic(elemento.titulo, elemento.imagen, elemento.descripcion);
      this.arraycomics.push(comic);
    }
    this._cdr.detectChanges();
  }
  
}
