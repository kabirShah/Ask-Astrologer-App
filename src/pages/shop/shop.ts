import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {DetailPage} from '../../pages/detail/detail';
import {CartPage} from '../../pages/cart/cart';
import {WishlistPage} from '../../pages/wishlist/wishlist';

import {Products} from '../../config/service';
@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage{
  public product_data=[];


 constructor(public navCtrl: NavController, 
  public navParams: NavParams,
   public loadingCtrl: LoadingController,
   public products:Products) 
  {                         
    this.product_data=this.products.product_data;
  }
  slice: number = 10;
    doInfinite(infiniteScroll) {
    setTimeout(() => {
    this.slice += 10;
    infiniteScroll.complete();
    }, 2000); 
  }
  ionViewDidLoad() { 
  }
  
  itemTapped(event, product){
    let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
        });
        loader.present();
        this.navCtrl.push(DetailPage, {product: product.product_id});
        loader.dismiss();
  }
  addToCart()
  {
    let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
        });        
        loader.present();    
        this.navCtrl.push(CartPage);
        loader.dismiss();
  }
  OpenShop()
  {
       let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
        });        
        loader.present();    
        this.navCtrl.push(WishlistPage);
        loader.dismiss();
  }
}