import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { TarjetaCredito } from '../models/TarjetaCredito';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private firebase: AngularFirestore) { }
  
  guardartarjeta = (tarjeta: TarjetaCredito): Promise<any> => {
    return this.firebase.collection('tarjetas').add(tarjeta)
    .then(()=>{
      console.log('Tarjeta registrada')
    }, error => {
      console.log(error);
    });
  }
}
