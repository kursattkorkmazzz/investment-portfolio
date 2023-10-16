import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() value: any;
  @Output() valueChange = new EventEmitter();

  @Input() placeHolder: string = '';
  @Input() type: 'text' | 'number' = 'text';

  changeValue(value: any) {
    switch (this.type) {
      case 'number':
        value = Number.parseFloat(value);
        break;
      default:
        break;
    }
    this.valueChange.emit(value);
  }
}
