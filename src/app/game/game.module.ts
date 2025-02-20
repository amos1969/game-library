import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameAddComponent } from './add/add.component';
import { GameListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'


@NgModule({
  declarations: [GameAddComponent, GameListComponent],
  exports: [GameAddComponent, GameListComponent],
  imports: [
    CommonModule, FormsModule
  ], 
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class GameModule { }
