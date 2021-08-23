import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'epsic-burkhalter-dev';

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.getInformation().subscribe(
      data => {
        sessionStorage.setItem('logged_in', data.logged_in.toString());
        if(data.logged_in){
          sessionStorage.setItem('username', data.username);
          sessionStorage.setItem('user_access', data.user_access.toString());
        }
      }, error => {
        sessionStorage.setItem('logged_in', false.toString());
      }
    );
  }

  is_logged(): boolean {
    return sessionStorage.getItem('logged_in') == "true";
  }

  logout(): void {
    this._authService.logout();
    sessionStorage.clear();
  }
}
