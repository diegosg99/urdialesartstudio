import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Curso } from 'src/app/models/Cursos';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-upload-curso',
  templateUrl: './upload-curso.component.html',
  styleUrls: ['./upload-curso.component.scss']
})
export class UploadCursoComponent {
  form: FormGroup;
  loading:boolean = false;
  id: string | undefined;
  imageFile: { link: string; file: any; name: string; } | any;
  imageRaw: { link: string; file: any; name: string; } | any;

  constructor(
    fb: FormBuilder,
    private _postService:CourseService,
    private toastr: ToastrService
  ) {
    this.form = fb.group({
      titulo: ['',Validators.required],
      descripcion: ['',[Validators.required,Validators.minLength(16)]],
      photo: [''],
      curso: ['']
    })
  }

  ngOnInit(): void {}

  postArticle = () => {
    if (this.id == undefined) {
      this.uploadPost();
    }else{
      this.editarPost(this.id);
    } 
  }

  uploadPost = () => {

    // const CURSO: Curso = {
    //   titulo: this.form.value.titulo,
    //   descripcion: this.form.value.descripcion,
    //   photo: this.imageFile.link,
    //   curso: this.form.value.curso,
    //   fechaCreacion: new Date(),
    //   fechaActualizacion: new Date()
    // }

    // this.loading = true;

    // this._postService.uploadPost(POST,this.imageRaw).then(()=> {
    //   this.toastr.success('La publicación se ha registrado con éxito.','¡Genial!');
    //   //this.form.reset();
    //   this.loading = false;
    // },(error: any) => {
    //   this.toastr.error('Oops.. Ha habido un problema al subir la publicación ¡Intentalo más tarde!','Error!')
    //   console.log(error);
    //   this.loading = false;
    // });
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
