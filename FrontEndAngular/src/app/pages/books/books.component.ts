import { MatTableDataSource } from "../../../../node_modules/@angular/material/table";
import { MatPaginator } from "../../../../node_modules/@angular/material/paginator";
import { MatSort } from "../../../../node_modules/@angular/material/sort";
import { ViewChild, OnInit, Component } from "../../../../node_modules/@angular/core";
import { HttpClient } from "../../../../node_modules/@angular/common/http";
import { BookService } from "../../services/bookService/book.service";



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  displayedColumns: string[] = [ 'title','author','description'];
  dataSource : any;
  length:number;
  pageSize:number=5;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor( private  bookService :BookService ) { }



  ngOnInit() :void{


    this.bookService.getBooks().subscribe((data)=>{

      this.dataSource = new MatTableDataSource(data._embedded.livres);
      this.length=data._embedded.livres.length;
      console.log(data);
      this.dataSource.paginator=this.paginator;
  this.dataSource.sort = this.sort;
      console.log("book marche ")
   }
   }
  }
