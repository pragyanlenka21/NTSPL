import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  data = new BehaviorSubject<any>('');
  getData = this.data.asObservable();

  constructor(private http: HttpClient) { }

  myArray = [
    {
      heading: 'Testing 1',
      text: 'text data 1'
    },
    {
      heading: 'Testing 2',
      text: 'text data 2'
    },
    {
      heading: 'Testing 3',
      text: 'text data 3'
    },
    {
      heading: 'Testing 4',
      text: 'text data 4'
    },
  ]
  getArrayData() {
    return this.myArray;
  }

  sendValue(value: any) {
    this.data.next(value);
  }

  getPosts(): Promise<any> {
    return new Promise((resolve, reject) => {

      // const headers = new HttpHeaders({
      //   Authorization: 'Bearer guwffwufwwvc',
      //   'Content-Type': 'application/json'
      // });

      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

      // this.http.get(apiUrl, { headers }).subscribe({
      this.http.get(apiUrl).subscribe({
        next: (response) => {
          resolve(response);
        },
        error(err) {
          reject(err);
        },
      })
    })
  }

  getPostWithObs(): Observable<any> {

    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer guwffwufwwvc',
    //   'Content-Type': 'application/json'
    // });

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    // return this.http.get(apiUrl,{ headers });
    return this.http.get(apiUrl);
  }

}
