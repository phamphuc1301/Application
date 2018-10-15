import { Component, OnInit, Input } from '@angular/core';
import { UserHeros } from "../..//model/user-heros";
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../service/hero/hero.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  hero : UserHeros;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero() : void {
    console.log("Starting");
    const id : number = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack() : void {
    this.location.back();
  }
}
