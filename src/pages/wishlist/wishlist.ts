import { Component } from '@angular/core';
import { IonicPage, NavController,Platform } from 'ionic-angular';
import {ShopPage} from '../../pages/shop/shop';
/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {

  constructor(public navCtrl: NavController,
    public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhislistPage');
  }
close(){
    this.platform.exitApp();
  }
  ContinueShop(){
    this.navCtrl.setRoot(ShopPage);
  }

}
