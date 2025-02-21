import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class CompanyAddComponent {

    companyForm: FormGroup
    formBuilder = inject(FormBuilder)
    companyService = inject(CompanyService)
    router = inject(Router)
  
    constructor(){
      this.companyForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required]
      });
  
    }
  
    addCompany(){
      this.companyService.addCompany(this.companyForm.value)
      this.router.navigate(['/'])
    }


}
