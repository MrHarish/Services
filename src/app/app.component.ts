import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authservice: AuthService){}
  title = 'app';

  value = true;

  OnLogIn(){
    this.authservice.login();
    this.value=!this.value;
  }

  OnLogout(){
    this.authservice.logout();
    this.value=!this.value;
  }
}
