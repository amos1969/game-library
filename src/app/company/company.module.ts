import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CompanyAddComponent } from './add/add.component';
import { CompanyListComponent } from './list/list.component';
import { CompanyUpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    CompanyAddComponent,
    CompanyListComponent,
    CompanyUpdateComponent
  ],
  imports: [
    CommonModule, FormsModule
  ], 
  providers: [provideHttpClient(withInterceptorsFromDi())] 
})
export class CompanyModule { }
