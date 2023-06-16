export class Curso {
    id?: string;
    nombre: string;
    descripcion: string;
    photo: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    linkContent: string;
    alumnos: Array<string>|any;

    constructor(nombre:string,descripcion:string,photo:string,fechaCreacion:Date,fechaActualizacion:Date,linkContent:string,alumnos:Array<string>|any) {

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.photo = photo;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.linkContent = linkContent;
        this.alumnos = alumnos;
    }
}