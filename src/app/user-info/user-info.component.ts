import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../data'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {
  
  @Input() userInfo:any;
  
  
  constructor() { }
  
  ngOnInit() {
  }
 
}
