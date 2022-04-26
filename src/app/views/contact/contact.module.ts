import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import {BackToHomeModule} from "../../components/layout/back-to-home/back-to-home.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "../../components/buttons/button/button.module";


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    BackToHomeModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class ContactModule { }
