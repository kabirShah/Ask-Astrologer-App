// src/app/core/core.module.ts

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Import services, guards, and interceptors
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { errorInterceptor } from './interceptors/error.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    ApiService,
  ]
})
export class CoreModule { 
  // Prevent re-import of CoreModule
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
