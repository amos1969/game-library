import { Component, inject } from '@angular/core';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class CompanyListComponent {
  companyService = inject(CompanyService);
  companies = this.companyService.companies;

  deletecompany(id: number){
    this.companyService.deletecompany(id);
  }
}
