import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ThankPage} from '../../pages/thank/thank';
import {ShopPage} from '../../pages/shop/shop';
@IonicPage()
@Component({
  selector: 'page-sucess',
  templateUrl: 'sucess.html',
})
export class SucessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SucessPage');
  }
	thank(){
    this.navCtrl.push(ThankPage);
  }
  back()
  {
  	this.navCtrl.setRoot(ShopPage);
  }

}
