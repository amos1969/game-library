import { Component, inject } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class GameListComponent {

  gameService = inject(GameService);
  games = this.gameService.games;

  deleteGame(id: number){
    this.gameService.deleteGame(id);
  }

}
