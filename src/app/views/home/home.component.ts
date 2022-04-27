import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  routes: {
    title: string;
    path: string;
  }[] = [
    {
      title: 'Pricing',
      path: 'pricing'
    },
    {
      title: 'Features',
      path: 'features'
    },
    {
      title: 'Contact',
      path: 'contact'
    },
    {
      title: 'Demo Request',
      path: 'demo'
    }
  ]
}
