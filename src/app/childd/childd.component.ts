import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-childd',
  templateUrl: './childd.component.html',
  styleUrls: ['./childd.component.css']
})
export class ChilddComponent implements OnInit {
  @Input() childMessage1 :string
  constructor() { }

  ngOnInit() {
  }

}
