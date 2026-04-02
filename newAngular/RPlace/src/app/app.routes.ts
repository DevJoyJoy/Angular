import { Routes } from '@angular/router';
import { LoginPage } from './features/login-page/login-page';
import { MainPage } from './features/main-page/main-page';
import { NotFoundPage } from './features/not-found-page/not-found-page';
import { RegisterPage } from './features/register-page/register-page';

export const routes: Routes = [
    {path: "", component: MainPage},
    {path: "Login", component: LoginPage},
    {path: "Register", component: RegisterPage},
    {path: "**", component: NotFoundPage}

];
