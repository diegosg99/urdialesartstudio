export class Product {
    id?: string;
    nombre: string;
    descripcion: string;
    photo: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    price: number;

    constructor(nombre:string,descripcion:string,photo:string,fechaCreacion:Date,fechaActualizacion:Date,linkContent:string,price:number) {

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.photo = photo;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.price = price;
    }
}