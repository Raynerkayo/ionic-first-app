import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MinhaPaginaPage } from '../pages/minha-pagina/minha-pagina';

@NgModule({
  declarations: [
    MyApp,
    //devo remover o HomePage, pois estou trabalhando ele como Lazy Loading, e não posso chamar em dois lugares.
    //caso contrário, ao ser chamado aqui, não seria feito a chamada sob demanda pois aqui já iria abrir
    //irei comentar apenas como forma de aprendizagem. Mas, ao aprender irei remover.
    //HomePage,
    ListPage,
    MinhaPaginaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    ListPage,
    MinhaPaginaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
