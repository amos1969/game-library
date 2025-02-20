import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Budget } from './budget/models/budget';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  http = inject(HttpClient);

  get budgets(): Promise<Budget[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.getAllBudgets}`));
    
  }

  async addBudget(budget: Budget): Promise<Budget> {

    const todo = await firstValueFrom(
      this.http.post(`${environment.addBudget}`, {
        grade: budget.grade,
        budget: budget.budget
      })
    );
    // @ts-ignore
    return todo;
  }

}
