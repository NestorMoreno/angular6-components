import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataSourceService {

  constructor(private http: HttpClient) { }

  getInfo(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
