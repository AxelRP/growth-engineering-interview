import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import {BackToHomeModule} from "../../components/layout/back-to-home/back-to-home.module";


@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    BackToHomeModule
  ]
})
export class FeaturesModule { }
