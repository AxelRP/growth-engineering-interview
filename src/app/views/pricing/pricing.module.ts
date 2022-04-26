import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import {BackToHomeModule} from "../../components/layout/back-to-home/back-to-home.module";
import {ButtonModule} from "../../components/buttons/button/button.module";


@NgModule({
  declarations: [
    PricingComponent
  ],
    imports: [
        CommonModule,
        PricingRoutingModule,
        BackToHomeModule,
        ButtonModule
    ]
})
export class PricingModule { }
