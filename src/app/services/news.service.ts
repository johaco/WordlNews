import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
    console.log('News Service');
  }

  getQuery(){
    const url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=f7ab2ba5a2c949c69c6a629fcbf8f624';
    return this.http.get(url);
  }
}
