import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PaymentPage } from'../pages/payment/payment';
import { MessagePage } from '../pages/message/message';
import { HowPage } from '../pages/how/how';

import { ShopPage} from '../pages/shop/shop';
import { DetailPage} from '../pages/detail/detail';

import { CartPage} from '../pages/cart/cart';
import { WishlistPage} from '../pages/wishlist/wishlist';

import { CheckoutPage} from '../pages/checkout/checkout';
import { AddressPage} from '../pages/address/address';
import { SucessPage} from '../pages/sucess/sucess';
import { ThankPage} from '../pages/thank/thank';
import { CreditPage} from '../pages/credit/credit';
import { CashPage} from '../pages/cash/cash';

import { SupportPage } from '../pages/support/support';

import { Products} from '../config/service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaymentPage,
    MessagePage,
    HowPage,
    ShopPage,
    DetailPage,
    CartPage,
    CheckoutPage,
    WishlistPage,
    AddressPage,
    SucessPage,
    SupportPage,
    CreditPage,
    CashPage,
    ThankPage
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    IonicModule.forRoot(MyApp,{
      scrollAssist: false, 
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaymentPage,
    MessagePage,
    HowPage,
    ShopPage,
    DetailPage,
    CartPage,
    CheckoutPage,
    WishlistPage,
    AddressPage,
    SucessPage,
    SupportPage,
    CreditPage,
    CashPage,
    ThankPage
   ],
  providers: [
    StatusBar,
    SplashScreen,
   {provide: ErrorHandler, useClass: IonicErrorHandler},                                   
    AuthServiceProvider,
    Products,
    ]
})
export class AppModule {}
