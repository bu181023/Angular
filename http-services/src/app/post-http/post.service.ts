import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private postHttp: HttpClient) {}
  getPost() {
    return this.postHttp.get('https://jsonplaceholder.typicode.com/posts');
  }
}
