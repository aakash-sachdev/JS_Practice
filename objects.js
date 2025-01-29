// Singleton ->  When a object is created with the constructor a singleton is created
// Object.create -> This construtor method to create objects

//Object literals
//Objects work on key value pairs, user can define there own keys.
// by default name is converted into "name" but we don't have to explicitly mention it. Value could be any data type

const Superhero = {
    name: "Batman",
    "real name": "Bruce Wayne",
    age: 40,
    location: "Gotham City",
    email: "batsignal@batsignal.com",
    isAvailable: false,
    lastSeenIn: ["Arkham Asylum","Freeze Tower"]
}

//Access an object ->
console.log(Superhero.email);
// console.log(JsUser[email]) 
// This will through an error cuz key is in string form but in this condition passed as an num

console.log(Superhero['email']);

// If the user wants to access real name than only method is to use the [] syntax, . syntax will through an error

console.log(Superhero['real name']);
