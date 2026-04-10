import { Routes } from '@angular/router';
import { LoginPage } from './features/login-page/login-page';
import { MainPage } from './features/main-page/main-page';
import { NotFoundPage } from './features/not-found-page/not-found-page';
import { authGuardGuard } from './domain/auth-guard-guard';

export const routes: Routes = [
    {path: "", component: MainPage, canMatch: [authGuardGuard]
    },
    {path: "Login", component: LoginPage},
    {path: "**", component: NotFoundPage}

];
