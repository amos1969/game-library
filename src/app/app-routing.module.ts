import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game/list/list.component';
import { GameAddComponent } from './game/add/add.component';
import { CompanyListComponent } from './company/list/list.component';
import { CompanyAddComponent } from './company/add/add.component';
import { CompanyUpdateComponent } from './company/update/update.component';
import { BudgetListComponent } from './budget/list/list.component';
import { BudgetAddComponent } from './budget/add/add.component';


const routes: Routes = [
  {
    path: "games",
    component: GameListComponent
  },
  {
    path: "games/add",
    component: GameAddComponent
  },
  {
    path: "companies",
    component: CompanyListComponent
  },
  {
    path: "companies/add",
    component: CompanyAddComponent
  },
  {
    path: "companies/update",
    component: CompanyUpdateComponent
  },
  {
    path: "budgets",
    component: BudgetListComponent
  },
  {
    path: "budgets/add",
    component: BudgetAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
