import { Component, OnInit,Input } from '@angular/core';
import {SharedserviceService} from '..//sharedservice.service'
@Component({
  selector: 'app-childc',
  templateUrl: './childc.component.html',
  styleUrls: ['./childc.component.css']
})
export class ChildcComponent implements OnInit {
  @Input() childMessage: string;
  data=''
  constructor(public service: SharedserviceService) {

    //alert(this.childMessage)
   }

  ngOnInit() {
    
    
  }
  getData()
  {
    this.data=this.service.getData()
    alert(this.data)
  }

}
