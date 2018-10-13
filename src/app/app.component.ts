import { Component } from '@angular/core';
function log(a, name, description) {
  console.log(a,name, description);
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pham Phuc Application';
  panel = 'Stay hungry, stay foolish!';
  constructor() {
    this.sum(10,12);
  }
  @log
  sum(a, b){
    console.log(a+b);
  }
}
