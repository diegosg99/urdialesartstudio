import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/services/post.service';
import { Product } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.scss']
})
export class UploadProductComponent {
  
  form: FormGroup;
  loading:boolean = false;
  id: string | undefined;
  imageFile: { link: string; file: any; name: string; } | any;
  imageRaw: { link: string; file: any; name: string; } | any;

  constructor(
    fb: FormBuilder,
    private _productService:ProductService,
    private toastr: ToastrService
  ) {
    this.form = fb.group({
      nombre: ['',Validators.required],
      descripcion: ['',[Validators.required,Validators.minLength(16)]],
      photo: [''],
      price: ['']
    })
  }

  ngOnInit(): void {}

  postArticle = () => {
    if (this.id == undefined) {
      this.uploadProduct();
    }else{
      this.editarPost(this.id);
    } 
  }

  uploadProduct = () => {

    const PRODUCT: any = {
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
      photo: this.imageFile.link,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
      price: this.form.value.price
    }

    this.loading = true;

    this._productService.uploadProduct(PRODUCT,this.imageRaw).then(()=> {
      this.toastr.success('Se ha publicado el producto con éxito.','¡Genial!');
      this.form.reset();
      this.loading = false;
    },(error: any) => {
      this.toastr.error('Oops... Ha habido un problema al subir el producto ¡Intentalo más tarde!','Error!')
      console.log(error);
      this.loading = false;
    });
  }

  editarPost = (id:string) => {
    const POST: any = {
      titulo: this.form.value.titulo,
      descripcion: this.form.value.descripcion,
      photo: this.form.value.photo,
      curso: this.form.value.curso,
      fechaActualizacion: new Date()
    }

    this.loading = true;

  }

  imagePreview = (event: any) => {

    console.log(event);

    if (event.target.files && event.target.files[0]) {
      this.imageRaw = event.target.files[0];

      const reader = new FileReader();

      reader.onload = (_event: any) => {
          this.imageFile = {
              link: _event.target.result,
              file: event.srcElement.files[0],
              name: event.srcElement.files[0].name
          };
      };
      reader.readAsDataURL(event.target.files[0]);
  }
  }
}
