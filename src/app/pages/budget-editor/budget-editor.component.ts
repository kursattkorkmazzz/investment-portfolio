import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import BudgetItem, { mockBudgetItemData } from 'src/app/domain/budget-item';

@Component({
  selector: 'app-budget-editor',
  templateUrl: './budget-editor.component.html',
  styleUrls: ['./budget-editor.component.css'],
})
export class BudgetEditorComponent {

  title: String = 'Budget Calculation';
  description: String = 'You can calculate easily your budget.';

  budgetList: BudgetItem[] = mockBudgetItemData;


  tempBudget : {
    tempId: number
    tempPrice: number | undefined,
    tempDescription:string
  } = {
    tempId: 0,
    tempPrice: undefined,
    tempDescription: ""
  };




  addBudgetItem() {
    if (!this.tempBudget.tempPrice) {
      console.log('You have to enter price.');
      return;
    }
    if (!this.tempBudget.tempDescription) {
      console.log('You have to enter description.');
      return;
    }
  
    let budget  = this.budgetList.at(this.budgetList.length-1);

    
    if(this.budgetList.length == 0){
      this.tempBudget.tempId = 0;
    }else if(!budget){
      return;
    }else{
      this.tempBudget.tempId = budget.id + 1;
    }

    this.budgetList.push(new BudgetItem(this.tempBudget.tempId,this.tempBudget.tempPrice, this.tempBudget.tempDescription));
    
    this.tempBudget.tempId = 0;
    this.tempBudget.tempPrice = undefined;
    this.tempBudget.tempDescription = '';
  }
}
