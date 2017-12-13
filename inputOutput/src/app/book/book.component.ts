import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'nec-book',
  templateUrl: './book.component.html',
  styles: []
})
export class BookComponent implements OnInit {

  @Input() books: Array<Book>;
  @Output() selectBook: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public bookSelected ( title ) {

    this.selectBook.emit( title );

  }

}
