import { Component, OnInit } from '@angular/core';
import {UserHeros} from './model/user-heros';

import {Mockhero} from './model/mockhero';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  hero : UserHeros =  {
    name : 'Pham Van Phuc',
    age : 10
  };
  heros = Mockhero;
  heroCopy : UserHeros;
  hello(hero: UserHeros) : void {
    this.heroCopy = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}
