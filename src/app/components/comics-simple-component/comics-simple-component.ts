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
  constructor() {
    //creamos un comic nuevo 
     this.comic = new Comic(
      "Spiderman",
      "https://static.wikia.nocookie.net/spiderman/images/1/1d/Brand_New_Day_-_Peter_Parker_sin_texto.jpg/revision/latest?cb=20260810071048&path-prefix=es",
       "Es el hombre araña mas loco del multiverso")
  }
}
