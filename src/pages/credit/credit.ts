import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {SucessPage} from '../../pages/sucess/sucess';

@IonicPage()
@Component({
  selector: 'page-credit',
  templateUrl: 'credit.html',
})
export class CreditPage {  
  private cardinfo: any = {
    name:'',
    number: '',
    expMonth: '',
    expYear:'',
    cvc: ''
  };
  public paymethods = 'creditcard';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditPage');
  }
  pay()
  {
      this.navCtrl.push(SucessPage);
  }

}
