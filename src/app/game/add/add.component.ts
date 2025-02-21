import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class GameAddComponent {

  gameForm: FormGroup
    formBuilder = inject(FormBuilder)
    gameService = inject(GameService)
    router = inject(Router)
  
    constructor(){
      this.gameForm = this.formBuilder.group({
        title: ['', Validators.required],
        rating: ['', Validators.required],
        description: ['', Validators.required],
        company: [0, Validators.required],
        budget: [0, Validators.required]
      });
  
    }
  
    addGame(){
      this.gameService.addGame(this.gameForm.value)
      this.router.navigate(['/'])
    }
}
