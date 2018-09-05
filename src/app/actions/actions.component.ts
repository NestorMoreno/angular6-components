import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  @Input() actions:any;

  constructor(private service: AppService) { }

  ngOnInit() {
  }

  public likeClick(){
    this.service.addLike();
  }

  public dislikeClick(){
    this.service.addDislike();
  }
  
}
