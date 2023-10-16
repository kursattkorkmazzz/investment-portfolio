import { Component, TemplateRef, ViewChild } from '@angular/core';
import BudgetItem, { mockBudgetItemData } from 'src/app/dto/budget-item';

@Component({
  selector: 'app-budget-editor',
  templateUrl: './budget-editor.component.html',
  styleUrls: ['./budget-editor.component.css'],
})
export class BudgetEditorComponent {
  title: String = 'Budget Calculation';
  description: String = 'You can calculate easily your budget.';
  budgetList: BudgetItem[] = mockBudgetItemData;

  tempPrice: number | undefined;
  tempDescription: string = '';

  addBudgetItem() {
    if (!this.tempPrice) {
      console.log('You have to enter price.');
      return;
    }
    if (!this.tempDescription) {
      console.log('You have to enter description.');
      return;
    }
    this.budgetList.push(new BudgetItem(this.tempPrice, this.tempDescription));

    this.tempPrice = undefined;
    this.tempDescription = '';
  }
}
