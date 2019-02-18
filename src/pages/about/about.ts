import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Segment } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 /**
  * Aqui vou mandar os metadados. E posso modificar os nomes.
  */
@IonicPage({
  //se eu mudar aqui o name, eu devo mudar tbm no home.ts
  name: 'about-page',
  //segment é para criar uma url com o nome que eu quiser. Carregando um id.
  segment: 'custom-about/:id',

  //usar para manter a seta de voltar. E tbm devo agora utilizar lazy loadin na minha home.
  //vai ser home.module.ts
  defaultHistory: ['HomePage']
})

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //pego o 'id' que eu coloquei como parametro no home.ts
    console.log('Identificador: ' + this.navParams.get('id'));
  }

}
