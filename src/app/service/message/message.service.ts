import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message : String[] = [];
  pushMessage(messageValue: String) {
     this.message.push(messageValue);
  }

  resetMessage() {
    console.log('Clear message');
    this.message = [];
  }
  constructor() { }
}
