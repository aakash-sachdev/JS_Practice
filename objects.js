// Singleton ->  When a object is created with the constructor a singleton is created
// Object.create -> This construtor method to create objects

//Object literals
//Objects work on key value pairs, user can define there own keys.
// by default name is converted into "name" but we don't have to explicitly mention it. Value could be any data type

const callSignal = Symbol("Batlight")

const Superhero = {
    name: "Batman",
    "real name": "Bruce Wayne",
    [callSignal]: "Batlight",
    age: 40,
    location: "Gotham City",
    email: "batsignal@batsignal.com",
    isAvailable: false,
    lastSeenIn: ["Arkham Asylum","Freeze Tower"]
}

console.log("-------------------------------------------------------------------------");
//Access an object ->
console.log(Superhero.email);
// console.log(JsUser[email]) 
// This will through an error cuz key is in string form but in this condition passed as an num

console.log(Superhero['email']);

console.log("-------------------------------------------------------------------------");

// If the user wants to access real name than only method is to use the [] syntax, . syntax will through an error

console.log(Superhero['real name']);

console.log("-------------------------------------------------------------------------");
// If symbol has to used in object then the symble has to put in []
console.log(Superhero[callSignal]);
console.log(typeof(Superhero[callSignal]));

console.log("-------------------------------------------------------------------------");
//Change the value with the object
Superhero.email = "Batman@gotham.com"
console.log(Superhero.email);

console.log("-------------------------------------------------------------------------");
//If you want to the user not to change any value
// Object.freeze(Superhero)

Superhero.email = "Batman@arkham.com"
console.log(Superhero);

console.log("-------------------------------------------------------------------------");
//functions in object
Superhero.greeting = function(){
    console.log(`Welcome The Dark Knight!!${this.location} is burning because of you.`);
}

// undefined will get printed cuz it is freezed
console.log(Superhero.greeting) // This will give the reference of function not executed

// it has to executed like a function will get printed cuz it is freezed
console.log(Superhero.greeting())