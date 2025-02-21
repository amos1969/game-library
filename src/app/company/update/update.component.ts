import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/company';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class CompanyUpdateComponent {

  companyUpdateForm: FormGroup
      formBuilder = inject(FormBuilder)
      companyService = inject(CompanyService)
      router = inject(Router)
    
      constructor(){
        this.companyUpdateForm = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
          phone: ['', Validators.required]
        });
    
      }
    
      editCompany(){
        this.companyService.updateCompany(this.companyUpdateForm.value)
        this.router.navigate(['/'])
      }
}
