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
}
