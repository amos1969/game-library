import { Component, inject } from '@angular/core';
import { BudgetService } from '../../budget.service';

@Component({
  selector: 'app-budget-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class BudgetListComponent {
budgetService = inject(BudgetService);
budgets = this.budgetService.budgets;

}
