import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import {BackToHomeModule} from "../../components/layout/back-to-home/back-to-home.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "../../components/buttons/button/button.module";


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    BackToHomeModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class DemoModule { }
