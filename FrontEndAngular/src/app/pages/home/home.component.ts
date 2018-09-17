import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   url="http://localhost:8085/books";
  public list:any;

  constructor(private  httpClient: HttpClient ) { }

  ngOnInit() {
    this.httpClient.get<any>(this.url).subscribe((data)=>{

      this.list= data._embedded.books;


    })
  }


}
