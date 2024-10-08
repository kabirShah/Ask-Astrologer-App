import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController,
  ToastController
} from "ionic-angular";
import { AddressPage } from "../../pages/address/address";
@IonicPage()
@Component({
  selector: "page-checkout",
  templateUrl: "checkout.html"
})
export class CheckoutPage {
    selectedTitle: any;
    full_name: any;
    phone: any;
    alter: any;
    pincode:any;
    address:any;
    locality:any;
    landmark:any;
    city:any;
    state:any;
    country:any;
    Adress:any;

  private users: Array<{
    selectedTitle: any;
    full_name: any;
    phone: any;
    alter: any;
    pincode:any;
    address:any;
    locality:any;
    landmark:any;
    city:any;
    state:any;
    country:any;
    Adress:any;
  }> = [];    

    private isEdit: boolean = false;
  // public user;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private toast: ToastController
  )
  {
    this.users =
      JSON.parse(localStorage.getItem("Users")) != null
        ? JSON.parse(localStorage.getItem("Users"))
        : new Array<{}>();
    console.log(
      "-------------------users--------------------" +
        JSON.stringify(this.users)
    );
    console.log(
      "-------------ADD USERS------------EDIT-----------------" +
        JSON.stringify(this.navParams.get("data"))
    );

    if (this.navParams.get("data") != null) {
      this.isEdit = true;
      this.selectedTitle = this.navParams.get("data").selectedTitle;
      this.full_name = this.navParams.get("data").full_name;
      this.phone = this.navParams.get("data").phone;
      this.alter = this.navParams.get("data").alter;
      this.pincode = this.navParams.get("data").pincode;
      this.address = this.navParams.get("data").address;
      this.locality = this.navParams.get("data").locality;
      this.landmark = this.navParams.get("data").landmark;
      this.city = this.navParams.get("data").city;
      this.state = this.navParams.get("data").state;
      this.country = this.navParams.get("data").country;
      this.Adress = this.navParams.get("data").Adress;
      
    }
  }
  save() {
    if (this.isEdit) {
      console.log("-----------------ADD USER------IF--------------");
      for (let i in this.users) {
        if (this.users[i].full_name == this.navParams.get("data").full_name) {
          this.users[i].full_name = this.full_name;
          this.users[i].selectedTitle = this.selectedTitle;
          this.users[i].phone = this.phone;
          this.users[i].alter = this.alter;
          this.users[i].pincode = this.pincode;
          this.users[i].address = this.address;
          this.users[i].locality = this.locality;
          this.users[i].landmark = this.landmark;
          this.users[i].city = this.city;
          this.users[i].state = this.state;
          this.users[i].country = this.country;
          this.users[i].Adress = this.Adress;
        }
      }
      localStorage.setItem("Users", JSON.stringify(this.users));
    } else {
    console.log("-----------------ADD USER------ELSE--------------");
    this.users.push({
    selectedTitle: this.selectedTitle,
    full_name: this.full_name,
    phone:this.phone,
    alter: this.alter,
    pincode:this.pincode,
    address:this.address,
    locality:this.locality,
    landmark:this.landmark,
    city:this.city,
    state:this.state,
    country:this.country,
    Adress:this.Adress,
      });
      localStorage.setItem("Users", JSON.stringify(this.users));
      this.toast
        .create({
          message: "User Added Successfully",
          duration: 1000
        })
        .present();
    }
    this.navCtrl.pop();
  }
}
