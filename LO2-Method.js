//Input
const person1 ={
    name:"Ahrdy Jane Desalan",
    age:19,
    occupation:"student",
    hobbies: "Daydreaming",

}

//Process and Output
console.log("Name: "+person1.name);
console.log("Age: "+person1.age);
console.log("Occupation: "+person1.occupation);
console.log("hobbies: "+person1.hobbies);
console.log("--------------------------------");


// Class definition
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.hobbies = this.hobbies;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Hobbies: " + this.hobbies);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}
            <strong>Hobbies:</strong> ${this.hobbies}
        `;
    }
}

// Creating an object (instance) of the Person class
const personOne = new Person('Ahrdy Jane Desalan', 19, 'Student', 'Daydreaming');

// Calling methods
personOne.displayInfo();       