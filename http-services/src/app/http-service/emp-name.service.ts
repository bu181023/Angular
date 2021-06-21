import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EmpNameService {
  constructor(private http: HttpClient) {}

  getName() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
 
}
