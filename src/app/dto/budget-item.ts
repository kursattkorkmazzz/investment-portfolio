export default class BudgetItem {
  amount: number;
  description: string;

  constructor(amount: number, description: string) {
    this.amount = amount;
    this.description = description;
  }
}

export const mockBudgetItemData = [
  new BudgetItem(1250, 'Dormitory Salary'),
  new BudgetItem(2000, 'Family'),
  new BudgetItem(-520, 'Dormitory'),
  new BudgetItem(-438, 'Korelee'),
  new BudgetItem(5000, 'Mehdi'),
  new BudgetItem(-5000, 'Enes'),
];
