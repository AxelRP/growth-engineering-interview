import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'pricing', loadChildren: () => import('./views/pricing/pricing.module').then(m => m.PricingModule) },
  { path: 'features', loadChildren: () => import('./views/features/features.module').then(m => m.FeaturesModule) },
  { path: 'contact', loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule) },
  { path: 'demo', loadChildren: () => import('./views/demo/demo.module').then(m => m.DemoModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
