import { Component, inject } from '@angular/core';
import { TestService } from '../../common-service/test.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  viewData: any = 'hgfyufe';

  // private testService = inject(TestService);
  constructor(private testService: TestService) {

  }

  ngOnInit(): void {
  
    this.testService.getData.subscribe((e: any) => {
      this.viewData = e;
    })

  }



}
