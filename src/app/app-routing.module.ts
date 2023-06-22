import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';
import { CursosComponent } from './views/cursos/cursos.component';
import { AboutComponent } from './views/about/about.component';
import { CartComponent } from './views/cart/cart.component';
import { UploadPostComponent } from './views/upload-post/upload-post.component';
import { UploadCursoComponent } from './views/upload-curso/upload-curso.component';
import { ProductosComponent } from './views/productos/productos.component';
import { PostComponent } from './views/post/post.component';
import { CrudComponent } from './views/crud/crud.component';
import { UploadProductComponent } from './views/upload-product/upload-product.component';


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
  },
  {
    path: "uploadPost",
    component: UploadPostComponent
  },
  {
    path: "uploadCourse",
    component: UploadCursoComponent
  },
  {
    path: "uploadProduct",
    component: UploadProductComponent
  },
  {
    path: "tienda",
    component: ProductosComponent
  },
  {
    path: "post/:id",
    component: PostComponent
  },
  {
    path: "crud",
    component: CrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
