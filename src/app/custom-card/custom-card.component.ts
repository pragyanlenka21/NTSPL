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

  @Output() sendMyData = new EventEmitter<any>();

  @Input() data2:any;

  sendData(){
    this.sendMyData.emit('hello');
  }
}
