import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  imports: [CommonModule],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.css'
})
export class CustomCardComponent {
  @Input() data: any = '';
  @Input() name: any = '';
  @Input() age: any = '';

  @Input() position: any = 0;

  @Input() heading: any;
  @Input() text: any;

  @Output() sendMyData = new EventEmitter<any>();

  @Input() data2:any;

  @Output() sendMyData2 = new EventEmitter<any>();


  sendData(){
    this.sendMyData.emit('hello');
  }

  sendData2(heading:any){
    this.sendMyData2.emit(heading);
  }
}
