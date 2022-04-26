import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EventsService} from "../../services/events.service";
import {HelperService} from "../../services/helper.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    form: new FormControl('contact')
  });
  sending = false;
  constructor(
    private eventSvc: EventsService,
    private helperSvc: HelperService
  ) { }

  ngOnInit(): void {
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get message() { return this.form.get('message'); }

  async send() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.sending = true

      const result = await this.eventSvc.registerFormEvent(this.form.value);
      if (result) {
        console.log('Contact form submission registered:', this.form.value);
        this.helperSvc.showAlert(
          "Contact form sent!",
          "Form submission registered successfully.",
          "success"
        );
      } else {
        this.helperSvc.showAlert(
          "Oopsy...",
          "This form submission could not be registered... Check the console for more details.",
          "error"
        );
      }

      this.sending = false;
    }
  }
}
