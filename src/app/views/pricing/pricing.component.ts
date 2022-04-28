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
      admins: 1,
      storage: 20,
      events: 1000,
      name: 'Starter'
    },
    {
      price: 15,
      admins: 3,
      storage: 100,
      events: 10000,
      name: 'Basic'
    },
    {
      price: 45,
      admins: 10,
      storage: 500,
      events: 100000,
      name: 'Business'
    }
  ]
}
