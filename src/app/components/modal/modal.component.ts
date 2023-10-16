import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  isVisible: boolean = true;
  public modelContent: 'editBudget' = 'editBudget';

  toggleVisible() {
    this.isVisible = !this.isVisible;
  }
}
