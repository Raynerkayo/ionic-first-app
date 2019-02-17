import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAbout(): void{
    //como é um lazing load, eu mando por string e não foço o import do AboutPage.
    this.navCtrl.push('AboutPage');
  }

}
