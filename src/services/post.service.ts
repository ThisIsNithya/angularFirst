import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }


  newPostCreate(postData: { title: string, body: string }): Observable<any> {
    return this.http.post<any>('https://angular-1-600e7-default-rtdb.firebaseio.com/data.json', postData);
  }
}
