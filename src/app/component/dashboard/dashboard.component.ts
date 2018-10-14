import { Component, OnInit } from '@angular/core';
import { UserHeros } from '../../model/user-heros';
import {HeroService} from '../../service/hero/hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService : HeroService ) {}
  hero : UserHeros[] = [];

  ngOnInit() {
    this.getUserHeros();
  }
  getUserHeros() : void {
    this.heroService.getMockHero().subscribe(heros => this.hero = heros.slice(1,5));
  }
}
