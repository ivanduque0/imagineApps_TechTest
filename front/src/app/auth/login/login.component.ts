import { Component, OnInit } from '@angular/core';
import { Login } from './models/login.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });


  public showPassword: boolean = false;

  wrongCredentials:boolean=false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  login(){
    let userData: Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authService.login(userData).subscribe(
      (response) => { 
        this.router.navigate(['/my-posts']);
      },
      (error) => { 
        this.wrongCredentials=true;
      });
  }

}
