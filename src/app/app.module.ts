import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PageViewEventModule} from "./components/buttons/page-view-event/page-view-event.module";
import {UpdateAnonIdModule} from "./components/buttons/update-anon-id/update-anon-id.module";
import {FooterModule} from "./components/layout/footer/footer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PageViewEventModule,
        UpdateAnonIdModule,
        FooterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
