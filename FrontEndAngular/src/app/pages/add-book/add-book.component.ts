import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BookService } from '../../services/bookService/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  messageEnvoye:String="";

  constructor(private bookService:BookService) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){

if(f.valid){

  this.bookService.postBook(f.value)
  .subscribe(
    () => {
      this.messageEnvoye="Livre ajouté merci ";
    },
    (error) => {
      console.log('Erreur ! : ' + error);
    }
  )
  ;

}

  }

}
