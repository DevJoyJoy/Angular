import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { MercadoCardComponent } from './features/main-page/mercado-page/mercado-card/mercado-card.component';
import { MercadoPageComponent } from './features/main-page/mercado-page/mercado-page.component';
import { ComidaPageComponent } from './features/main-page/comida-page/comida-page.component';
import { CreateAccountComponent } from './features/login-page/create-account/create-account.component';

const routes: Routes = [
  {path: "", component:MainPageComponent, children: [
    {path: "mercado", component:MercadoPageComponent},
    {path: "comida", component:ComidaPageComponent}
  ]},
  {path: "login", component:LoginPageComponent},
  {path: "create-account", component:CreateAccountComponent},
  {path: "**", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
