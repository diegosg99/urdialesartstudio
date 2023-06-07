import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.scss']
})
export class ListarTarjetaComponent implements OnInit{

  listaTarjetas: TarjetaCredito[] = [];

  constructor(private _tarjetaService: TarjetaService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this._tarjetaService.obtenerTarjetas().subscribe(docs => {
      this.listaTarjetas = [];

      docs.forEach((doc:any) => {
        this.listaTarjetas = [{id:doc.payload.doc.id,...doc.payload.doc.data()},...this.listaTarjetas];
      });
      console.log(this.listaTarjetas);
    });
  }

  eliminarTarjeta(id:any) {
    this._tarjetaService.eliminarTarjeta(id).then(()=> {

      this.toastr.success('Se ha eliminado la tarjeta correctamente.','¡Tarjeta eliminada!');

    },error => {

      this.toastr.error('No se pudo eliminar, Error: '+error,'Error');

    });
  }

  editarTarjeta(tarjeta:TarjetaCredito) {
    this._tarjetaService.addTarjetaEdit(tarjeta);
  }
}
