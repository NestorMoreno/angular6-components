import { Component, OnInit } from '@angular/core';
import { Persona } from '../data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public user = Persona;
  constructor() { }

  ngOnInit() {
  }

}
