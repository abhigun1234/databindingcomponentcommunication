import {Output,EventEmitter, Component, OnInit } from '@angular/core';
import {SharedserviceService} from '..//sharedservice.service'
@Component({
  selector: 'app-childb',
  templateUrl: './childb.component.html',
  styleUrls: ['./childb.component.css']
})
export class ChildbComponent  {
  @Output() messageEvent = new EventEmitter<string>();
  message:string="hi abhi"
  constructor(public service:SharedserviceService ) { }

  

  sendMessage()
  {
   this.messageEvent.emit(this.message)

  }
  shareData()
  {

    this.service.setData(" I love angular  ")
  }

}
