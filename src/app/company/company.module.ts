import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyAddComponent } from './add/add.component';
import { CompanyListComponent } from './list/list.component';
import { CompanyUpdateComponent } from './update/update.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CompanyAddComponent,
    CompanyListComponent,
    CompanyUpdateComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, FormsModule
  ], 
  providers: [provideHttpClient(withInterceptorsFromDi())] 
})
export class CompanyModule { }
