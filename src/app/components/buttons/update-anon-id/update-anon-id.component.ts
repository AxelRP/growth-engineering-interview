import { Component, OnInit } from '@angular/core';
import {AnonIdService} from "../../../services/anon-id.service";

@Component({
  selector: 'app-update-anon-id',
  templateUrl: './update-anon-id.component.html',
  styleUrls: ['./update-anon-id.component.scss']
})
export class UpdateAnonIdComponent {

  constructor(
    public anonIdSvc: AnonIdService
  ) { }

}
