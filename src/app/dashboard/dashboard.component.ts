import { Component } from '@angular/core';
import { CustomCardComponent } from "../custom-card/custom-card.component";
import { TestService } from '../common-service/test.service';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  imports: [CustomCardComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  para = 'dgdgdv'

  hello = 'dgg';

  afsh = 56;

  mydata = {
    name: 'testing2',
    age: 25
  }

  array = [
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
  myData: any[] = [];

  constructor(private testService: TestService, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.getData();
    // this.getDataObs();
  }

  async getData() {
    try {
      const response = await this.testService.getPosts();

      // if (response.status == 'success') {

      //   if (response.data) {
      //     this.myData = response.data;
      //   }else{

      //   }

      // }
      // if (response.success) {
      //   this.myData = response.data;
      // } else {

      // }

      this.myData = response;

      console.log(this.myData);
    } catch (err) {
      console.log(err)
    }
  }

  getDataObs() {
    this.testService.getPostWithObs().subscribe({
      next: (response) => {
        console.log(response);
        this.myData = response;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    })
  }

  open(content:any) {
    this.modalService.open(content);
  }
  
}
