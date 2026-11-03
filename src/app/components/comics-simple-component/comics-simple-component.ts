import { Component } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-simple-component',
  standalone: false,
  styleUrl: './comics-simple-component.css',
  templateUrl: './comics-simple-component.html',
})
export class ComicsSimpleComponent {
  comic: Comic;
  arraycomics!: Comic[];

  constructor() {
    //creamos un comic nuevo 
     this.comic = new Comic(
      "Spiderman",
      "https://static.wikia.nocookie.net/spiderman/images/1/1d/Brand_New_Day_-_Peter_Parker_sin_texto.jpg/revision/latest?cb=20260810071048&path-prefix=es",
       "Es el hombre araña mas loco del multiverso")
  }
  mostrarComics(): void {
    this.arraycomics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        "Yo soy Groot"
      ),
      new Comic(
      "Avengers",
      "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
      "Los Vengadores"
      ),
      new Comic(
      "Spawn",
      "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
      "Todd MacFarlane"
      )
    ]; 
  }
}
