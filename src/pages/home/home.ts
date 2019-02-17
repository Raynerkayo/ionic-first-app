import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

//carregar a homePage
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAbout(): void{
    //como é um lazing load, eu mando por string e não foço o import do AboutPage.
    //dentro das {} eu passo os paramentros e pego no navparams no about.ts
    this.navCtrl.push('about-page',{
      id: 10
    });
  }

}
