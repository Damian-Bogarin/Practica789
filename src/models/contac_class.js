export class Contact {

    name = '';
    lastName = '';
    email = '';
    conexion = false;


    constructor(name, lastName, email, conect){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.conexion = conect;
    }
}