import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ListarTarjetaComponent } from './views/listar-tarjeta/listar-tarjeta.component';
import { CrearTarjetaComponent } from './views/crear-tarjeta/crear-tarjeta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { TarjetaService } from './services/tarjeta.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LandingComponent } from './views/landing/landing.component';
import { PlataformaPagoComponent } from './views/plataforma-pago/plataforma-pago.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { CursosComponent } from './views/cursos/cursos.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ParallaxComponent } from './views/parallax/parallax.component';
import { ParallaxDirective } from './parallax.directive';
import { AboutComponent } from './views/about/about.component';
import { Usuario } from './models/Usuario';
import { CartComponent } from './views/cart/cart.component';
import { UploadPostComponent } from './views/upload-post/upload-post.component';
import { Storage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UploadCursoComponent } from './views/upload-curso/upload-curso.component';
import { PaymentService } from './services/payment.service';
import { ProductosComponent } from './views/productos/productos.component';
import { PostComponent } from './views/post/post.component';
import { CrudComponent } from './views/crud/crud.component';
import { UploadProductComponent } from './views/upload-product/upload-product.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarTarjetaComponent,
    CrearTarjetaComponent,
    LandingComponent,
    PlataformaPagoComponent,
    NavbarComponent,
    CursosComponent,
    ProfileComponent,
    ParallaxComponent,
    ParallaxDirective,
    AboutComponent,
    CartComponent,
    UploadPostComponent,
    UploadCursoComponent,
    ProductosComponent,
    PostComponent,
    CrudComponent,
    UploadProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule,
    FirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    TarjetaService,
    AngularFirestore,
    PaymentService,
    ProductService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
