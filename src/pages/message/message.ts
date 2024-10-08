import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  public users: any;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public auth: AuthServiceProvider)
   { this.getUsers(); }
  
  getUsers() {
    this.auth.getUsers()
    .then(data => {
      var users=JSON.parse(data['_body']);
      this.users = users.data;
      console.log(this.users);
      
    });
  }
}
