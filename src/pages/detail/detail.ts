import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {CartPage} from '../../pages/cart/cart';
import {WishlistPage} from '../../pages/wishlist/wishlist';
import {Products} from '../../config/service';
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
slideData = [{ image: "assets/img/bluesaphire.jpg" },
  { image: "assets/img/emreald.jpeg" },
  { image: "assets/img/ruby.jpeg" }]
  public product: any ;  
  public product_data=[];

  public selectedProduct: any = {};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public products:Products) 
    {
      this.product = navParams.get('product');
      this.selectedProduct= products.product_data.find(obj => obj.product_id == this.product);
  }
  ionViewDidLoad() {
  }

  addToCart(product)
	{
    let loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration: 3000
    });        
    loader.present();    
    this.navCtrl.push(CartPage, {product:this.selectedProduct});
    loader.dismiss();
	}
  cart()
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
