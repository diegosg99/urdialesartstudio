export class TarjetaCredito {
    id?: string;
    titular: string;
    numeroTarjeta: string;
    fechaExpiracion: string;
    cvv: number;
    fechaCreacion: Date;
    fechaActualizacion: Date;

    constructor(titular:string,numeroTarjeta: string,fechaExpiracion: string, cvv:number, fechaCreacion: Date, fechaActualizacion: Date) {
        this.id = this.uuidv4();
        this.titular = titular;
        this.numeroTarjeta = numeroTarjeta;
        this.fechaExpiracion = fechaExpiracion;
        this.cvv = cvv;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    uuidv4 = (): string => {
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