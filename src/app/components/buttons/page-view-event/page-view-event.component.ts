import { Component } from '@angular/core';
import {EventsService} from "../../../services/events.service";
import {HelperService} from "../../../services/helper.service";

@Component({
  selector: 'app-page-view-event',
  templateUrl: './page-view-event.component.html',
  styleUrls: ['./page-view-event.component.scss']
})
export class PageViewEventComponent {

  constructor(
    private eventSvc: EventsService,
    private helperSvc: HelperService
  ) { }

  async registerPageView() {
    const currentUrl = window.location.href;
    const result = await this.eventSvc.registerPageView(currentUrl);
    if (result) {
      this.helperSvc.showAlert(
        "Page view registered!",
        `URL: ${currentUrl}`,
        "success"
      )
    } else {
      this.helperSvc.showAlert(
        "Oopsy...",
        "This page view could not be registered... Check the console for more details.",
        "error"
      )
    }

  }
}
