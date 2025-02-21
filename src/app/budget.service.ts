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
  //data: any = firstValueFrom(this.http.get(`${environment.apiURL}/budgets`)); 

  get budgets(): Promise<Budget[]> {

    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiURL}/budgets`)).then(budgets => budgets.data); 

    
  }


  async addBudget(budget: Budget): Promise<Budget> {
    
    const newBudget = await firstValueFrom(
      this.http.post(`${environment.apiURL}/budgets`, {
        grade: budget.grade,
        budget: budget.budget
      })
    );
    // @ts-ignore
    return newBudget;
  }

}
