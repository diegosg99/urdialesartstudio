export class Product {
    id?: string;
    nombre: string;
    descripcion: string;
    photo: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    price: number;

    constructor(nombre:string,descripcion:string,photo:string,fechaCreacion:Date,fechaActualizacion:Date,linkContent:string,price:number) {

        this.id = this.uuidv4();
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.photo = photo;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.price = price;
    }

    uuidv4(): string {
        return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g,
        (c: number) =>
            (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
            ).toString(16)
        );
    }
}