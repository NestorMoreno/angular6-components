import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() results:any;

  constructor(private service: AppService) { 
    
  }

  ngOnInit(): void {
    console.log("ngOnInit()");
  }

  // ngDoCheck(): void {
  //   console.log("ngDoCheck()")
  // }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit()");
  // }

  public informParent() {
    this.service.inform("nuevo valor para observable");
  }

}
