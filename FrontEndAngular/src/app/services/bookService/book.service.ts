import { Injectable } from '@angular/core';
import { ApiConfigurationService } from '../../configuration/api-configuration.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Livre } from '../../shared/interfaces/livre';
import { Observable } from '../../../../node_modules/rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookService {


  urlNewYorkTimes:string;
  constructor(private  apiConfigurationService: ApiConfigurationService,private httpClient:HttpClient) { }

  postBook(livre:Livre)
  {
return this.httpClient.post(this.apiConfigurationService.apiUrl,livre);

}

getBooks():Observable<any>{
 return  this.httpClient.get<any>(this.apiConfigurationService.apiUrl);

}
getBookNewYorkTimes(motCle:string):Observable<any>{
 this.urlNewYorkTimes="https://api.nytimes.com/svc/books/v3/lists.json?api-key=c8668e5587694689bdadca8391711e1e&list="+motCle;
console.log( this.urlNewYorkTimes);
   return  this.httpClient.get<any>(this.urlNewYorkTimes);

/* url += '?' + $.param({
  'api-key': "c8668e5587694689bdadca8391711e1e",
  'list': "e-book-fiction",
  'sort-order': "ASC"
}); */


}

}
