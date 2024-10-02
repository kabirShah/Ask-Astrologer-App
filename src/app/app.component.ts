import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { App } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { MessagePage } from '../pages/message/message';
import { HowPage } from '../pages/how/how';
import { ShopPage } from '../pages/shop/shop';
import { SupportPage } from '../pages/support/support';


export interface page {
    title: string;
    component: any;
    icon: string;
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<page>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar,
     public splashScreen: SplashScreen,

    public alertCtrl: AlertController,
     public app: App) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title:'Messages',component: MessagePage,icon:'albums'},
      { title:'How it works',component: HowPage,icon:'help'},     
      { title: 'Shop', component: ShopPage, icon: 'cart' },
      { title: 'Feedback', component: SupportPage, icon: 'mail-open' }
    ];

  }
  initializeApp() {
  this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'HomePage') {
          if (nav.canGoBack()){
              nav.pop();
          } else {
              const alert = this.alertCtrl.create({
                  title: 'AskAstrology',
                  message: 'ARE YOU SURE YOU WANT TO EXIT THE APP ?',
                  buttons: [{
                      text: 'Cancel',
                      role: 'cancel',
                      handler: () => {
                        this.nav.setRoot('ShopPage');
                        console.log('**For Cancelation **');
                      }
                  },{
                      text: 'Exit App',
                      handler: () => {
                        // this.logout();
                        this.platform.exitApp();
                      }
                  }]
              });
              alert.present();
          }
      }
  });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
