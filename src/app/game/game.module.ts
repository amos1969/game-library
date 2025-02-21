import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameAddComponent } from './add/add.component';
import { GameListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GameAddComponent, GameListComponent],
  exports: [GameAddComponent, GameListComponent],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, FormsModule
  ], 
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class GameModule { }
