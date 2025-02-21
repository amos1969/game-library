import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Game } from './game/models/game';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  http = inject(HttpClient);
  
  get games(): Promise<Game[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiURL}/games`)).then(games => games.data); 
    
  }

  async addGame(game: Game): Promise<Game> {

    const newGame = await firstValueFrom(
      this.http.post(`${environment.apiURL}/games/company/${game.company}/budget/${game.budget}`, {
        title: game.title,
        rating: game.rating,
        description: game.description
      })
    );
    console.log(newGame);
    // @ts-ignore
    return newGame;
  }

  async deleteGame(id: number){
    firstValueFrom(this.http.delete(`${environment.apiURL}/games/${id}`));
  }
}
