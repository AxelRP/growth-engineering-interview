import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToHomeComponent } from './back-to-home.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    BackToHomeComponent
  ],
  exports: [
    BackToHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BackToHomeModule { }
