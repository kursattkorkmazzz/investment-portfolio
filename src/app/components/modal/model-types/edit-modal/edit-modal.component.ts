import { Component, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent {
  @Output() @ViewChild('editModal') templateRef: TemplateRef<any> | null = null;
}
