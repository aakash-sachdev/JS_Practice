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

console.log("-------------------------------------------------------------------------");
// Singleton
const legoPlayer = new Object()
// const legoPlayer = {} Both are the same
console.log(legoPlayer) // Will return empty object

const LegoCollector = {
    name: "Thor",
    fullname: {
        asgardname :{
            firstname: "Thor",
            power: "God of Thunder"
        }
    }
}

// Access the value

console.log(LegoCollector.fullname?.asgardname.power)//Help to if the user is not sure about if the response sent by the API is there or not else too many conditional has to be used


console.log("-------------------------------------------------------------------------");
// Combinging objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// console.log(obj1, obj2) // prints 2 seperate objects

const obj3 = {obj1, obj2}
console.log(obj3) // nested objects didn't add

const obj4 = Object.assign({}, obj1, obj2) // {} is used as a source -  else onj1 is used as a source and all the other objects get added in that
console.log(obj4) // Add both the objects

const obj5 = {...obj1, ...obj2} // spread operator usage is easy and preferred
console.log(obj5) // Add both the objects

console.log("-------------------------------------------------------------------------");
console.log(Object.keys(Superhero)) // This will return the key in the form of array that can be used by looping through them
console.log(Object.values(Superhero))
console.log(Object.entries(Superhero)) // This will return the key value in the form of array
console.log(Superhero.hasOwnProperty('name')) // if want to check the property - boolean result

//More about the objects
// Goto console in browser in prototype