import { Injectable } from '@angular/core';
import {UserHeros} from '../../model/user-heros';
import {Mockhero} from '../../model/mockhero';
import {Observable, of} from 'rxjs';
import {MessageService} from '../message/message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getMockHero() : Observable<UserHeros []> {
    this.messageService.pushMessage('starting get Hero !');
    return of(Mockhero);
  }
  constructor(private messageService : MessageService) { }
}
