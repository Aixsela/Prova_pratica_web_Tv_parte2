export class RegisterDto {
    "nome": string;
    "cognome": string;
    "email": string;
    "password": string;
    

    costructor(nome: string = "", cognome: string = "", email: string = "", password: string = "", ripetiPassword: string = ""){
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
    }
}

export class LoginDto {
    "email": string;
    "password": string;

    constructor(email:string = "", password:string ="") {
        this.email = email;
        this.password = password;
    }
}


export interface User {
    id: number;
    email: string;
}

export interface LoggedUser {
    accessToken: string;
    user: User;
}