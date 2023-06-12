import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';
import { CursosComponent } from './views/cursos/cursos.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
