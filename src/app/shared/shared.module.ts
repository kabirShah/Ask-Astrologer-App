// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import shared components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// Import other shared components, directives, and pipes

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    // Other shared components, directives, and pipes
  ],
  imports: [
    CommonModule
    // Import other necessary modules
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    // Other shared components, directives, and pipes
  ]
})
export class SharedModule { }
