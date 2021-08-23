import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {} as Login;
  message = "";

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this._authService.login(this.loginData).subscribe(
      data => {
        sessionStorage.setItem('logged_in', data.logged_in.toString());
        if(data.logged_in){
          sessionStorage.setItem('username', data.username);
          sessionStorage.setItem('user_access', data.user_access.toString());
        }
        eval("$('#loginModal').modal('hide')");
        this.loginData.username = "";
        this.loginData.password = "";
      }, error => {
        this.message = error.error.message;
      }
    );
  }
}
