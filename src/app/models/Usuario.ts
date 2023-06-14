import { Curso } from "./Cursos";
import { TarjetaCredito } from "./TarjetaCredito";

export class Usuario {
    id?: string;
    name: string;
    email: string;
    phone: string;
    photo: string;
    cards: Array<TarjetaCredito>
    courses: Array<Curso>;

    constructor(name:string,email: string,phone: string, photo:string, cards: Array<TarjetaCredito>, courses: Array<Curso>) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.photo = photo;
        this.cards = cards;
        this.courses = courses;
    }

}