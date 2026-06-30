import { Component, OnInit } from '@angular/core';
import { CustomCardComponent } from "../custom-card/custom-card.component";
import { CommonModule } from '@angular/common';
import { TestService } from '../common-service/test.service';

@Component({
  selector: 'app-home2',
  imports: [CustomCardComponent, CommonModule],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {
  para = 'dhdhhd';


  arr = [
    {
      name: 'text',
      age: 25
    },
    {
      name: 'text2',
      age: 19
    },
    {
      name: 'text3',
      age: 21
    },
    {
      name: 'text4',
      age: 26
    },
    {
      name: 'text5',
      age: 26
    },
  ]

  array:any = [];
  showMyData: any;

  constructor(private testService: TestService){

  }

  ngOnInit(): void {
    this.getDataForArray();
  }

  getDataForArray(){
    this.array =  this.testService.getArrayData();
  }

  getData(data: any) {
    this.showMyData = data;
  }
}
