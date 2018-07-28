import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetails = {
    username: "",
    password: ""
  }

  constructor(private router: Router, private auth: AuthService) {

  }

  ngOnInit() {



  }

  loginSubmit(e) {
    e.preventDefault();
    console.log(this.loginDetails);
    if(this.auth.loginAuthenticate(this.loginDetails)) {
      this.auth.setLoggedIn(true);
      this.router.navigate(["/home"]);
    }else {
      this.loginDetails = {
        username: "",
        password: ""
      }
    }
  }
}
