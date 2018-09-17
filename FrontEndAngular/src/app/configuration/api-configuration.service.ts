import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ApiConfigurationService {
  apiUrl: string="http://localhost:8088/livres";
  urlNewYorkTimes:string="https://api.nytimes.com/svc/books/v3/lists.json?api-key=c8668e5587694689bdadca8391711e1e";
  constructor() { }


}
