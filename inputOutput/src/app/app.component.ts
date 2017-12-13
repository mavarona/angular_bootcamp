import { Component } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'nec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nec';

  public books: Array<Book> = [
    {id: 1,
    title: 'El Quijote',
    author: 'Miguel de Cervantes',
    image: 'http://www.elresumen.com/libros/don_quijote_de_la_mancha.jpg'
    },
    {
      id: 2,
      title: 'El Buscón',
      author: 'Francisco de Quevedo y Villegas',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Quevedo_El_Buscon_1626.JPG'
    },
    {
      id: 3,
      title: 'El Lazarillo de Tormes',
      author: 'Anónimo',
      image: 'http://4.bp.blogspot.com/-eUGl7BeENbM/TzUIS0dZeVI/AAAAAAAAA7g/qV6mA96E2dc/s1600/wusen7.jpg'
    }
  ];

  bookSelected (event) {
    console.log(event);
  }

}
