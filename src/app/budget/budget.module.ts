import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetAddComponent } from './add/add.component';
import { BudgetListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'



@NgModule({
  declarations: [
    BudgetAddComponent,
    BudgetListComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, FormsModule
  ],
  exports: [BudgetAddComponent, BudgetListComponent],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class BudgetModule { }
