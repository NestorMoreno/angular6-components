import { Component } from '@angular/core';
import { Persona } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public user = Persona;
    
}
