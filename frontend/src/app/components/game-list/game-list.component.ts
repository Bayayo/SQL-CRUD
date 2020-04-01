import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService} from '../../services/games.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
}) 
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  games: any = [];

  constructor(
    private gameService: GamesService
  ) { }

  ngOnInit() {
    this.refreshGames();
  }

  refreshGames() {
    this.gameService.getGames().subscribe(
      res =>{
        this.games = res;
      },
      err => console.log(err)
    )
  }

  deleteGame( id: number ){
    console.log(id)
    this.gameService.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.refreshGames();
      },
      err => console.log(err)
    );
  }

    editGame(id: number){
      console.log(id)
  }

}
