import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksComponent } from './pages/books/books.component';
import { RouterModule, Routes } from '@angular/router';
import { BookNewYokTimesComponent } from './pages/book-new-yok-times/book-new-yok-times.component';

const appRoutes: Routes = [
  { path: 'addBook', component:AddBookComponent },
  { path: 'books',      component: BooksComponent },
  { path: 'bookNewYorkTimes',      component: BookNewYokTimesComponent },


  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(
      appRoutes)
  ],
  declarations: []
})
export class RouteModule { }
