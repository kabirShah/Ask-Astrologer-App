import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SucessPage} from '../../pages/sucess/sucess';

@IonicPage()
@Component({
  selector: 'page-cash',
  templateUrl: 'cash.html',
})
export class CashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CashPage');
  }
pay()
	{
	    this.navCtrl.push(SucessPage);
	}
}
