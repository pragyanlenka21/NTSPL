import { Component } from '@angular/core';
import { CustomCardComponent } from "../custom-card/custom-card.component";

@Component({
  selector: 'app-dashboard',
  imports: [CustomCardComponent],
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
}
