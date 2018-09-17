import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouteModule } from './route.module';
import { RouterModule } from '@angular/router';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '../../node_modules/@angular/material';




@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule, SharedModule ,PagesModule,ServicesModule, HttpClientModule,NgxDatatableModule
    ,RouteModule, RouterModule,FormsModule,ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
