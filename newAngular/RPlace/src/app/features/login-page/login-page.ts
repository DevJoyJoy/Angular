import { Component } from '@angular/core';
import { AuthApi } from '../../domain/auth.api';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginDto } from '../../domain/userInterface';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  constructor(private api: AuthApi) {}

  loginForm : FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  subscribeForm : FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  get Username () {
    return this.loginForm.get("username");  
  }

  get Password () {
    return this.loginForm.get("password");
  }
  
  login = () => {
    if(!this.loginForm.valid){
      alert("Campos inválidos");
      return;
    }
    const data: LoginDto = {
      password: this.Password?.value,
      username: this.Username?.value
    }
    this.api.login(data).subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem("token", res);
    });
  }

  subscribe = () => {
    if(!this.subscribeForm.valid){
      alert("Campos inválidos");
      return;
    }
    const data: LoginDto = {
      password: this.Password?.value,
      username: this.Username?.value
    }
    this.api.subscribe(data).subscribe();
  }
}
