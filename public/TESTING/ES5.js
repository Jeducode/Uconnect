function Person(surname, firstName, dob) {
    this.surname = surname;
    this.firstName = firstName;
    this.birthday = new Date(dob);
    // this.calAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return ageDate.getUTCFullYear() - 1970;
    // }

}

// Since the Calculate Age funtion is the same for any object instantiated froom the constructor, it's best to put it in the prototype
Person.prototype.calAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return ageDate.getUTCFullYear() - 1970;
}

Person.prototype.fullName = function () {
    return `${this.firstName} ${this.surname}`;
}

Person.prototype.getMarried = function (newLastName) {
    this.surname = newLastName;
}

const aboutDapo = new Person("Oladokun", "Oladapo", '9-10-1993')

const mary = new Person("Smith", "Mary", '3-7-1990')
console.log(aboutDapo);
console.log(mary);

console.log(aboutDapo.calAge());
console.log(aboutDapo.fullName());

mary.getMarried('Oladokun');

console.log(mary);


// Protypal Inheritance from another constructor

function Student(surname, firstName, dob, studentId, studentCourse) {
    Person.call(this, surname, firstName, dob);
    this.studentId = studentId;
    this.studentCourse = studentCourse;
}

// Code to Inherit the the prototype from the Person prototype
Student.prototype = Object.create(Person.prototype);

// Make student constructor retur student
Student.prototype.constructor = Student;

// Overwrite Person full Name and customize for Student in the student prototype
Student.prototype.fullName = function () {
    return ` How are you doing ${this.firstName} ${this.surname}?`;
}


const ade = new Student("Kuti", "Ade", "8-10-1995", '666', 'Geography');
console.log(ade);
console.log(ade.fullName());