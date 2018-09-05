import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Persona } from "./data";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private observer = new Subject();
  public $obs = this.observer.asObservable();
  private user = Persona;

  addLike():void {
    this.user.results[0].value ++;
    (this.user.results[1].value > 0) ? this.user.results[1].value -- : 0;
    this.user.results[2].value ++;
  }

  addDislike():void {
    this.user.results[1].value ++;
    (this.user.results[0].value > 0) ? this.user.results[0].value -- : 0;
    this.user.results[2].value ++;
  }
}
