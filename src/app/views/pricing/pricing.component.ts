import { Component } from '@angular/core';
import {PlanInterface} from "../../interfaces/plan.interface";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  plans: PlanInterface[] = [
    {
      price: 0,
      feature1: 1,
      feature2: 20,
      feature3: 1000,
      name: 'Starter'
    },
    {
      price: 15,
      feature1: 3,
      feature2: 100,
      feature3: 10000,
      name: 'Basic'
    },
    {
      price: 45,
      feature1: 10,
      feature2: 500,
      feature3: 100000,
      name: 'Business'
    }
  ]
}
