import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from './models/register.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    password2: new FormControl(null, [Validators.required]),
  });

  public showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  signup(){
    if (this.registerForm.value.password ==this.registerForm.value.password2 && this.registerForm.valid){
      let userData: Register = {
        email: this.registerForm.value.email,
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
      }
      this.authService.register(userData).subscribe(
        (response) => { 
          this.router.navigate(['/login']);
        },
        (error) => { 
        });
    }
    
  }

}
