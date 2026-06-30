import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightCoursePipe } from "./my-pipes/highlight-course.pipe";
import { HighlightInputDirective } from './mydirective/highlight-input.directive';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { HeaderComponent } from "./common/header/header.component";
import { SidebarComponent } from "./common/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HighlightCoursePipe, HighlightInputDirective, CustomCardComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test_practice';
  showBox: boolean = false;
  showBoxColor: boolean = false;

  para = 'schbsjhc hwvcvuhyfv hjdiqdghqdgi qkjdfgiqfqgj';

  date = new Date();

  students: any = [
    {
      id: 1,
      name: "Amit Kumar",
      age: 20,
      course: "Computer Science",
      grade: "A",
      status: "Active",
      date: this.date,
    },
    {
      id: 2,
      name: "Priya Singh",
      age: 21,
      course: "Mathematics",
      grade: "B+",
      status: "Active",
      date: this.date
    },
    {
      id: 3,
      name: "Rahul Sharma",
      age: 19,
      course: "Physics",
      grade: "A-",
      status: "Inactive",
      date: this.date
    },
    {
      id: 4,
      name: "Neha Gupta",
      age: 22,
      course: "Chemistry",
      grade: "B",
      status: "Graduated",
      date: this.date
    },
    {
      id: 5,
      name: "Vikash Patel",
      age: 20,
      course: "Biology",
      grade: "C+",
      status: "Active",
      date: this.date
    }
  ];


  constructor() {
    console.log(this.date);
  }



  showMyBox() {
    this.showBox = !this.showBox;

  }
  showColor() {
    this.showBoxColor = !this.showBoxColor;
  }

  showBadge(val: any): any {
    return {
      'text-bg-success': val === 'Active',
      'text-bg-danger': val === 'Inactive',
      'text-bg-primary': val === 'Graduated'
    }
  }
}



