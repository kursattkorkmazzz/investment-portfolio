export default class BudgetItem {
  id: number;
  amount: number;
  description: string;
  
  constructor(id: number,amount: number, description: string) {
    this.id = id;
    this.amount = amount;
    this.description = description;
  }
}

export const mockBudgetItemData = [
  new BudgetItem(0,1250, 'Dormitory Salary'),
  new BudgetItem(1,2000, 'Family'),
  new BudgetItem(2,-520, 'Dormitory'),
  new BudgetItem(3,-438, 'Korelee'),
  new BudgetItem(4,5000, 'Mehdi'),
  new BudgetItem(5,-5000, 'Enes'),
];
