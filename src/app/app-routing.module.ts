import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';
import { CursosComponent } from './views/cursos/cursos.component';
import { AboutComponent } from './views/about/about.component';
import { CartComponent } from './views/cart/cart.component';

const routes: Routes = [
  // {
  //   path: "login",
  //   component: AdminComponent
  // },
  // {
  //   path: "registro",
  //   component: ProfileComponent
  // },
  {
    path: "cursos",
    component: CursosComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
