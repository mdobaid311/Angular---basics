import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  getDate(){
    return this._http.get("https://jsonplaceholder.typicode.com/todos")
  }
}
