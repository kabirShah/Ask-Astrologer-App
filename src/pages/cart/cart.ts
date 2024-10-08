import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddressPage} from '../../pages/address/address';
import {ShopPage} from '../../pages/shop/shop';
@IonicPage()	
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  public product:any={};
  public product_data=[];
  public selectedProduct:any={};
  public subtotal:any={};
  public isEmptyCart: boolean = true;

  // private _values1 = ["1", "2", "3","4","5","6"];
  constructor(public navCtrl: NavController,
   public navParams: NavParams) {
    if (navParams.get('product')) {
      this.product = navParams.get('product');
      this.isEmptyCart = false;
    }
    console.log(navParams.get('product'));
    // this.product.product_price+this.product.product_ship;
    this.product.subtotal=this.product.product_price+this.product.product_ship;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

 // removeItem(product) {
 //    this.products.removeFromCart(product).then(() => {
 //      this.loadCartItems();
 //    });
 //  }
 removeItem()
 {
    this.product = {};
    this.isEmptyCart = true;
     
 }
 saveItem()
 {
 
 }
  checkOut()
  {
		this.navCtrl.push(AddressPage);
  }
 // firstDropDownChanged(val: any) {
 //    console.log(val);
//}
  back()
  {
    this.navCtrl.setRoot(ShopPage);
  }
}	