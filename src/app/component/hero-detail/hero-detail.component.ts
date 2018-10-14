import { Component, OnInit, Input } from '@angular/core';
import { UserHeros } from "../..//model/user-heros";
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero : UserHeros;

  constructor() { }
  
  ngOnInit() {
  }

}
