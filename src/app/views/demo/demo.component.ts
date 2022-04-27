import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EventsService} from "../../services/events.service";
import {HelperService} from "../../services/helper.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    domain: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    product: new FormControl('', [Validators.required]),
    form: new FormControl('demo')
  });
  sending = false;

  constructor(
    private eventSvc: EventsService,
    private helperSvc: HelperService
  ) { }

  get name() { return this.form.get('name'); }
  get company() { return this.form.get('company'); }
  get domain() { return this.form.get('domain'); }
  get email() { return this.form.get('email'); }
  get product() { return this.form.get('product'); }

  async send() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.sending = true

      const result = await this.eventSvc.registerFormEvent(this.form.value);
      if (result) {
        this.helperSvc.showAlert(
          "Demo form sent!",
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
