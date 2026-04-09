import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '../../domain/auth.api';
import { LoginDto } from '../../domain/userInterface';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  constructor(private api: AuthApi) {}

  subscribeForm : FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  get Username () {
    return this.subscribeForm.get("username");  
  }

  get Password () {
    return this.subscribeForm.get("password");
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
    console.log("Funcionou")
  }
}
