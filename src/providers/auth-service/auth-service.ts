import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceProvider {
  //for registration call of api from here is made.
  apiUrl = 'http://192.168.0.56/v1/createNewQuestion';
  //list of user api
  apiUrll='http://192.168.0.56/v1/getAllQuestions';
  //api for user data
  
  data:any;


constructor(public http: Http) {
  console.log('Hello Auth-Service is call..!!!!');}

  addUser(data) {
  console.log('AuthServiceProvider->>', data)
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl, data)
    .subscribe(res => {
      resolve(res);
  }, (err) => {
    reject(err);
      });
    });
  }
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrll).subscribe(data => {
      resolve(data);
    },err => {
      console.log(err);
      });
    });
  }
}