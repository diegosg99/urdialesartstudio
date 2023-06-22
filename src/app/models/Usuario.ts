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
        
        this.id = this.uuidv4();
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.photo = photo;
        this.cards = cards;
        this.courses = courses;
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