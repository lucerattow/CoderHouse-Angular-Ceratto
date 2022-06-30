export default class Alumno implements AlumnoInterface {
    Nombre: string;
    Apellido: string;
    Nacimiento: Date;
    Aprobado: boolean;

    constructor(Nombre: string, Apellido: string, Nacimiento: Date, Aprobado: boolean) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Nacimiento = Nacimiento;
        this.Aprobado = Aprobado;
    }
}

interface AlumnoInterface {
    Nombre: string;
    Apellido: string;
    Nacimiento: Date;
    Aprobado: boolean;
}