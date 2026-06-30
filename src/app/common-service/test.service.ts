import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  data = new BehaviorSubject<any>('');
  getData = this.data.asObservable();

  constructor() { }

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

  sendValue(value:any){
    this.data.next(value);
  }
}
