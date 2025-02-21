import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BudgetService } from '../../budget.service';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class BudgetAddComponent {
  budgetForm: FormGroup
  formBuilder = inject(FormBuilder)
  budgetService = inject(BudgetService)
  router = inject(Router)

  constructor(){
    this.budgetForm = this.formBuilder.group({
      grade: ['', Validators.required],
      budget: [0, Validators.required]
    });

  }

  addBudget(){
    this.budgetService.addBudget(this.budgetForm.value)
    this.router.navigate(['/'])
  }
}
