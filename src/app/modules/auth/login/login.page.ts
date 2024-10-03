// src/app/modules/auth/login/login.page.ts

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  returnUrl: string = '/home';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['returnUrl']) {
        this.returnUrl = params['returnUrl'];
      }
    });
  }

  async onLogin() {
    const loading = await this.loadingController.create({
      message: 'Logging in...',
    });
    await loading.present();

    // Replace with your API endpoint
    this.http.post<{ token: string }>('https://your-api.com/auth/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: async (response) => {
        await loading.dismiss();
        this.authService.login(response.token);
        this.router.navigateByUrl(this.returnUrl);
      },
      error: async (err) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login Failed',
          message: err.error.message || 'Invalid credentials.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
