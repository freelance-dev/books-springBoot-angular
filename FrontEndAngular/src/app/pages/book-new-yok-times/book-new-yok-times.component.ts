import { MatTableDataSource } from "../../../../node_modules/@angular/material/table";
import { MatPaginator } from "../../../../node_modules/@angular/material/paginator";
import { MatSort } from "../../../../node_modules/@angular/material/sort";
import { ViewChild, OnInit, Component } from "../../../../node_modules/@angular/core";
import { HttpClient } from "../../../../node_modules/@angular/common/http";
import { BookService } from "../../services/bookService/book.service";
import { NgForm } from "../../../../node_modules/@angular/forms";


@Component({
  selector: 'app-book-new-yok-times',
  templateUrl: './book-new-yok-times.component.html',
  styleUrls: ['./book-new-yok-times.component.css']
})
export class BookNewYokTimesComponent implements OnInit {


/*   rows2=[];
  columns=[
  {prop:'list_name'},{prop:'bestsellers_date'},{prop:'book_details'}];
rows=[];
 */

  constructor(private  httpClient: HttpClient, private  bookService :BookService ) { }
  displayedColumns: string[] = ['list_name', 'title','author','description', 'bestsellers_date'];
  dataSource : any;
  length:number;
  pageSize:number=5;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  ngOnInit() {


  }



  onSubmit(f:NgForm){


    this.bookService.getBookNewYorkTimes(f.value.titre).
    subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data.results);
      this.length=data.results.num_result;
      console.log(f.value.titre);
      console.log(data.results);
      console.log(data.results.list_name);
      this.dataSource.paginator=this.paginator;
  this.dataSource.sort = this.sort;
   },
  (error) => {
    console.log('il ya une erreur  ! : ' + error);
  },
  () => {
    console.log("Observable terminé  ");
  })


  }

}


