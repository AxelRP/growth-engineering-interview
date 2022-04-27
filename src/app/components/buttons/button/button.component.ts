import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() processing = false;
  @Input() text = '';
  @Input() icon = '';
  @Input() expanded = false;
  @Input() rounded = false;
  @Output() onClick = new EventEmitter();
}
