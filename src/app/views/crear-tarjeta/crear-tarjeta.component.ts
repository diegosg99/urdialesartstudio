import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.scss']
})
export class CrearTarjetaComponent {
  form: FormGroup;
  loading:boolean = false;

  constructor (fb: FormBuilder,
              private _tarjetaService:TarjetaService,
              private toastr: ToastrService) {
    this.form = fb.group({
      titular: ['',Validators.required],
      numeroTarjeta: ['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
      fechaExpiracion: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
      cvv: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]]
    })
  }

  crearTarjeta = () => {

    const TARJETA: TarjetaCredito = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }

    this.loading = true;

    this._tarjetaService.guardartarjeta(TARJETA).then(()=> {
      this.toastr.success('La tarjeta de ha registrado con éxito.','¡Genial!');
      this.form.reset();
      this.loading = false;
    },error => {
      this.toastr.error('Oops.. Ha habido un problema al guardar la tarjeta ¡Intentalo más tarde!','Error!')
      console.log(error);
      this.loading = false;
    });
  }
}
