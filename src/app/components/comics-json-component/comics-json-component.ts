import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent {
  arraycomics: Comic [] = [];

  async mostrarComics(): Promise<void> {
    let path = "documents/comics.json";
    let response = await fetch(path);
    let datos = await response.json();
    for (let elemento of datos){
      let comic = new Comic(elemento.titulo, elemento.imagen, elemento.descripcion);
      this.arraycomics.push(comic);
    }
    this._cdr.detectChanges();
  }
  constructor(
    private _cdr: ChangeDetectorRef
  ){}
}
