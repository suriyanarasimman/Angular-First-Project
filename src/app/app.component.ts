import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name = "";
  status = "No server was Created";
  Bstate:boolean = false;

  onclic(){
    this.status = "Server was created, Name is " + this.name;
  }
}
