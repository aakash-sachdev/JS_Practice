const marvel_heros = ["Thor", "Spiderman", "Ironman"];
const dc_heros = ["Batman", "Superman", "Flash"];

console.log(dc_heros);
console.log(marvel_heros);

console.log("-----------------------------------------------------------------------------------------------")

// Push will create a 2D array or array within array-
// marvel_heros.push(dc_heros) // Push edit the existing array
// console.log(marvel_heros)
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

console.log("-----------------------------------------------------------------------------------------------")

// Concat will add both the array into single array
const all_heros = marvel_heros.concat(dc_heros) // Concat returns a new array
console.log(all_heros)

console.log("-----------------------------------------------------------------------------------------------")

// Spread Opretor can do exactly the same as concat but in easier way and preffered way cuz more arrays can be added as well
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

console.log("-----------------------------------------------------------------------------------------------")

//
const num__arr = [ 1, 2, 3, 4, [5, 6, 7], 8, [1, 2, 3, [5, 6]], 9 ]

const real_arr = num__arr.flat(Infinity) // infinity is the value give if spread needs to work in multiple levels 1,2,3 or any other number can also be used for a specifc level if wanted to be achived. Good practice is to give exact depth.
console.log(real_arr)

console.log("-----------------------------------------------------------------------------------------------")

//If sometime the api give different type of data then 
console.log(Array.isArray("Aakash"))
console.log(Array.from("Aakash")) // Convert string to array
console.log(Array.from({name : "Aakash"})) // can't convert to array cus keys and value needs to explained while converting. If not empty array is returned

console.log("-----------------------------------------------------------------------------------------------")

//If value or variable need to be converted into array
let scr1 = 100
let scr2 = 500
let scr3 = 800

console.log(Array.of(scr1, scr2, scr3))
