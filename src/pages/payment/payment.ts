import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { LoadingController,Platform } from 'ionic-angular';
import {ShopPage} from '../../pages/shop/shop';
import {CreditPage} from '../../pages/credit/credit';
import {CashPage} from '../../pages/cash/cash';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})

export class PaymentPage {
 
  
  // private userObject;

  // 34.20*19.60
  // 16.00*13.60

  public paymethods = 'creditcard';
  constructor(
    
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    platform:Platform,
    public app: App
    ) {
    // this.page();
 // platform.registerBackButtonAction(()=>{
 //      console.log("backPressed 1");
 //    },1);


    // this.userObject = JSON.parse(localStorage.getItem('userData'));
    // console.log(this.userObject);
  }

   // ionViewDidLoad() {
   //     this.setBackButtonAction()
   // }
   // setBackButtonAction(){
   //   this.navCtrl.backButtonClick = () => {
   //   //Write here wherever you wanna do
   //    this.navCtrl.pop(ShopPage);
   //   }
   // }
  credit()
  {
        this.navCtrl.push(CreditPage);
  }
  cash()
  {
        this.navCtrl.push(CashPage);
  }
  // page()
  // {
  //   this.platform.registerBackButtonAction(()=>{
  //     let nav = app.getActiveNavs()[0];
  //     let active = nav.getActive();

  //     if(active.pagesPaymentPage){
  //    //work u wanna do with dat page name
  //     }
  //     nav.pop(ShopPage); // this will work for other pages then the page name

  //   },2)﻿
  // }
  // goToSecond()
  // {
  //   this.navCtrl.setRoot(ShopPage);
  // }

// onBackPressed()
// {

//      super.onBackPressed(ShopPage);  // optional depending on your needs
//   // code here to do whatever you want when back is pressed
// }
    // pay(cardinfo) 
    // {  
    //     //loader start code
            
    // }
    // showtoasterror()
    // {
    //     let loader = this.loadingCtrl.create({
    //     content: "Please wait..."
    //     });
    //     loader.present();    
    //     let toast = this.toastCtrl.create({
    // message: ' Card Number is required And it must be 16 Digit..! = '+cardinfo.number+'Select Your Month...! '+cardinfo.expMonth+' Select Your Year...! '+ cardinfo.expYear+' CVC must be 3 digit'+cardinfo.cvc,
    //     message: 'User payment Failed...!',
    //     position: 'bottom',
    //     duration: 3000
    //     });
    //     toast.present();
    //     loader.dismiss();
        
    //     this.navCtrl.setRoot(HomePage);
    // }
    // showtoast()
    // {
    //     let loader = this.loadingCtrl.create({
    //     content: "Please wait..."
    //     });
    //     loader.present();
    //     let toast = this.toastCtrl.create({
    //     message: 'User payment successfully',
    //     position: 'bottom',
    //     duration: 3000
    //     });
    //     toast.present();
    //     loader.dismiss();
    //     this.navCtrl.setRoot(HomePage);
    // }
}