import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams} from "ionic-angular";

import { CheckoutPage } from "../../pages/checkout/checkout";
import { PaymentPage } from "../../pages/payment/payment";


@IonicPage()
@Component({
  selector: "page-address",
  templateUrl: "address.html"
})
export class AddressPage {
  // private useraddress;
  // private selectedards:any={};
  // private address = [];
  private users: any;
  public deleadrs: boolean = true;
  // public data:any={};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
    this.deleadrs = false;
    
  }

  ionViewWillEnter() {
    this.users = JSON.parse(localStorage.getItem("Users"));
    console.log(
      "------------Home--USers-------------" + JSON.stringify(this.users)
    );
  }
    edit(info: any) {
    this.navCtrl.push(CheckoutPage, { data: info });
    console.log(
      "--------------HOME----EDIT----------------" + JSON.stringify(info)
    );
  }
  Address() {
    // let modal = this.modalCtrl.create(CheckoutPage,{"addresses":this.address});
    // modal.onDidDismiss((data)=>{
      // this.prepareData(data)
      // console.log("---------data---------"+JSON.stringify(data))
      
      // localstorage.push("address",JSON.stringify(this.address))
    // })

    
    // modal.present();
    this.navCtrl.push(CheckoutPage);
  }
    delete(i: any) {
    this.users.splice(i, 1);
    localStorage.setItem("Users", JSON.stringify(this.users));
  }

  Continue() {
    this.navCtrl.push(PaymentPage);
  }
  
  // removeItem()
  // {
  //   this.useraddress = {};
  //   this.deleadrs = true;   
  // }
}
