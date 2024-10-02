import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import {ShopPage} from '../../pages/shop/shop';
@IonicPage()
@Component({
  selector: 'page-thank',
  templateUrl: 'thank.html',
})
export class ThankPage {

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankPage');
  }
// close(){
//     this.platform.exitApp();
//   }
  continue()
  {
        this.navCtrl.setRoot(ShopPage);
  }
  back()
  {
    this.navCtrl.setRoot(ShopPage);
  }
}
