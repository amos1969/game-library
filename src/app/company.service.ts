import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Company } from './company/models/company';
import { environment } from '../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

   http = inject(HttpClient);
  
    get companies(): Promise<Company[]> {
      // @ts-ignore
      return firstValueFrom(this.http.get(`${environment.apiURL}/companies`)).then(companies => companies.data); 
      
    }
  
    async addCompany(company: Company): Promise<Company> {
  
      const newCompany = await firstValueFrom(
        this.http.post(`${environment.apiURL}/companies`, {
          name: company.name,
          email: company.email,
          phone: company.phone
        })
      );
      // @ts-ignore
      return newCompany;
    }

    async updateCompany(company: Company): Promise<Company> {
      console.log(company.id)
      const newCompany = await firstValueFrom(
        this.http.put(`${environment.apiURL}/companies/${company.id}`, {
          name: company.name,
          email: company.email,
          phone: company.phone
        })
      );
      console.log(company.id)
      console.log(newCompany);
      // @ts-ignore
      return newCompany;
    }

    async deletecompany(id: number){
      firstValueFrom(this.http.delete(`${environment.apiURL}/companies/${id}`));
      
    }

}
