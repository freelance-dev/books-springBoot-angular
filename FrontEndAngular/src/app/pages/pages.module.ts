import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { BookNewYokTimesComponent } from './book-new-yok-times/book-new-yok-times.component';
import {MatTableModule} from '@angular/material/table';
import {  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,NgxDatatableModule,FormsModule,MatTableModule,
    MatPaginatorModule,

    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  MatSortModule,
  BrowserAnimationsModule


  ],
  declarations: [HomeComponent , AddBookComponent, BooksComponent, PageNotFoundComponent,
      BookNewYokTimesComponent],
 exports: [HomeComponent , AddBookComponent, BooksComponent, PageNotFoundComponent,
  BookNewYokTimesComponent]
})
export class PagesModule { }
