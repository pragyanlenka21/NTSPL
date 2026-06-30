import { Component } from '@angular/core';
import { TestService } from '../../common-service/test.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  name:any = '';
  constructor(private testService: TestService) {

  }

  sendData() {
    debugger
    this.testService.sendValue(this.name);
  }



}
