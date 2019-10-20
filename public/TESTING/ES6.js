class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

const dapo = new Person2("Oladapo", "Oladokun");

console.log(dapo.greeting());