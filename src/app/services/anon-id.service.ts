import { Injectable } from '@angular/core';
import {HelperService} from "./helper.service";

@Injectable({
  providedIn: 'root'
})
export class AnonIdService {
  anonId = '';

  constructor(
    private helperSvc: HelperService
  ) {
    if (!localStorage.getItem('anon-id')) {
      this.refreshId();
    } else {
      this.anonId = localStorage.getItem('anon-id') as string;
    }
    console.log('Current anonymous ID:', this.anonId);
  }

  refreshId() {
    const newId = this.generateId();
    localStorage.setItem('anon-id', newId);
    console.log('New anonymous ID:', newId);
    this.anonId = newId;
    this.helperSvc.showAlert(
      "Anonymous ID updated",
      `Just fyi, your new id is: ${newId}`,
      "success"
    );
  }

  generateId(): string {
    return 'anon_id_' + this.helperSvc.generateId(15);
  }
}
