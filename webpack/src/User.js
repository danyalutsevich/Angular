export class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    sayHello(){
        console.log(`Hello ${this.name}`);
    }
    getProfile(){
        console.log(`${this.name}, ${this.email}, ${this.password}`);
    }
}
