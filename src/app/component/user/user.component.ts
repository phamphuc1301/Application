import { Component, OnInit } from '@angular/core';
import { UserHeros } from "../../model/user-heros";
import {MessageService} from '../../service/message/message.service'; 
import {HeroService} from '../../service/hero/hero.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  hero : UserHeros =  {
    name : 'Pham Van Phuc',
    id : 10
  };

  heros : UserHeros[];
  heroCopy : UserHeros;

  getHeros() : void {
    this.heroService.getMockHero()
      .subscribe(heros => this.heros = heros);
  }

  hello(hero: UserHeros) : void {
    this.heroCopy = hero;
  }

  constructor(private heroService : HeroService ) { 
    
  }

  ngOnInit() {
    this.getHeros();
  }

}
