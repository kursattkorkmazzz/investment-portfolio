import { Component, EventEmitter, Input, Output } from '@angular/core';
import BudgetItem from 'src/app/dto/budget-item';

@Component({
  selector: 'app-budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.css'],
})
export class BudgetTableComponent {
  @Input() budgetItems: BudgetItem[] = [];
  @Output() budgetItemsChange = new EventEmitter<BudgetItem[]>();

  calculateNetBudget(): number {
    let netBudget: number = 0;
    for (let item of this.budgetItems) {
      netBudget += item.amount;
    }
    return netBudget;
  }

  removeBudgetItem(budgetItem: BudgetItem) {
    if (!budgetItem) {
      console.log('You have to give budget item that will be remove.');
      return;
    }

    let tempArray: BudgetItem[] = [];
    this.budgetItems.forEach((item) => {
      if (item != budgetItem) {
        tempArray.push(item);
      }
    });

    this.budgetItemsChange.emit(tempArray);
  }
}
