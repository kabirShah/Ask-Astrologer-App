import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreditPage } from '../../pages/credit/credit';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public user = {
    "first_name":"",
    "last_name":"",
    "gender":"",
    "email":"",
    "horary_number":"",
    "question":"",
    "token":"tok_1Djos4DKfdbtikLQK9lQlBRb"
  };

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController
    ) { 
}
    logForm(user) 
    {
      console.log(this.user);
      this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
      var data = JSON.stringify(user.value);
      localStorage.setItem('userData', data);
      this.navCtrl.push(CreditPage);
    }
}