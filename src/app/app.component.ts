import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = false;
  inc = [];


  onclick(){
    this.status = !(this.status);
    this.inc.push(this.inc.length +1);
  }
}
