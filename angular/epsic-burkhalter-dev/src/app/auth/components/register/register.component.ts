import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData = {} as Register;
  message = "";

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    this._authService.register(this.registerData).subscribe(
      data => {
        sessionStorage.setItem('logged_in', data.logged_in.toString());
        if(data.logged_in){
          sessionStorage.setItem('username', data.username);
          sessionStorage.setItem('user_access', data.user_access.toString());
        }
        eval("$('#registerModal').modal('hide')");
        this.registerData.username = "";
        this.registerData.email = "";
        this.registerData.password = "";
        this.registerData.passconf = "";
      }, error => {
        this.message = error.error.message;
      }
    );
  }
}
