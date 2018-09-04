import { Component, Input } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component'
import { Persona } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*public obj = { 
    name: "Nestor Moreno",
    title: "Prueba de componentes",
    img: "https://vignette.wikia.nocookie.net/marvel-batalladesuperheroes/images/f/fb/Iron_Man_preview.png/revision/latest?cb=20160108163903&path-prefix=es",
    description: "Descripción de prueba",
    likeCount: 1,
    dislikeCount: 0,
    totalVotes: 0
  };*/
  /*   
  //public user = Persona[0];
  */

  public user = Persona;
      

  /*
  likeClick():void {
    this.obj.totalVotes ++;
    this.obj.likeCount ++;
    (this.obj.dislikeCount == 0 ? 0: this.obj.dislikeCount = this.obj.dislikeCount-1) ;
  }

  dislikeClick():void {
    this.obj.totalVotes ++;
    this.obj.dislikeCount ++;
    (this.obj.likeCount == 0 ? 0: this.obj.likeCount = this.obj.likeCount-1) ;
  }
  */
}
