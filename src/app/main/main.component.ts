import { Component, OnInit } from '@angular/core';
import { Persona } from '../data';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public user = Persona;
  public users;
  constructor(private repository:RepositoryService){ }

  ngOnInit(){
    this.users = this.repository.getInfo();
  }
   

}
