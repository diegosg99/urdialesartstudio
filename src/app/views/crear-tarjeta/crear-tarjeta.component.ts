import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { Stripe } from 'stripe';


@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.scss']
})
export class CrearTarjetaComponent implements OnInit {
  form: FormGroup;
  loading:boolean = false;
  titulo:string = 'Agregar Tarjeta';
  id: string | undefined;

  stripe!: Stripe;

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

  ngOnInit(): void {
    this._tarjetaService.getTarjetaEdit().subscribe(data => {
      this.id = data.id;
      this.titulo = 'Editar Tarjeta';
      this.form.patchValue({
        titular: data.titular,
        numeroTarjeta: data.numeroTarjeta,
        fechaExpiracion: data.fechaExpiracion,
        cvv: data.cvv
      })
    })
  }

  postTarjeta = () => {

    if (this.id == undefined) {
      this.agregarTarjeta();
    }else{
      this.editarTarjeta(this.id);
    }

    
  }

  agregarTarjeta() {
    const TARJETA: any = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
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

  editarTarjeta(id:string) {
    const TARJETA: any = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
      fechaActualizacion: new Date()
    }

    this.loading = true;
    this._tarjetaService.editarTarjeta(id,TARJETA).then(()=>{
      this.loading = false;
      this.titulo = 'Editar Tarjeta';
      this.form.reset();
      this.id = undefined;
      this.toastr.info('La tarjeta de ha modificado con éxito','¡Tarjeta actualizada!')
    },error => {
      console.log(error);
    }).then(() => this.titulo = 'Agregar Tarjeta');

  }
    
  // stripper = () => {
  //   const options = {
  //     layout: {
  //       type: 'tabs',
  //       defaultCollapsed: false,
  //     }
  //   };


  //   this.stripe = new Stripe('pk_test_51NKyaJLz2h9Y2LvLO1z09I3LyBhgmnV8pQe7tgDfZv67qKF8CxJV7j3MkfA8IhtCalZKxoVF3ZVXqGRsiqEqqQAo00nmJKDMmf', options);
  //   const appearance = { /* appearance */ };

  //   const elements = this.stripe.elements({ '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'
  //   , appearance });
  //   const paymentElement = elements.create('payment', options);
  //   paymentElement.mount('#payment-element');
    
  // }
}