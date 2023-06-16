export class Post {
    id?: string;
    titulo: string;
    descripcion: string;
    photo: string;
    curso: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;

    constructor(titulo:string,descripcion: string,photo: string, curso:string, fechaCreacion: Date, fechaActualizacion: Date) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.photo = photo;
        this.curso = curso;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

}