
// Iterate over object properties
// Create an object with multiple properties.
// Use a loop (such as for...in) to iterate over the object properties.
// Perform an action on each property, such as logging its key and value to the console.

 const school = 
 {
    name:'Unizik',
    location: 'Awka',
    faculties: 9,
    departments: 20,
    founder:'Nnamdi Azikiwe',
    branches: 5,
    viceChancellor: 'Gibson Nwosu'
}
for (const key in school) {
    console.log(`${key} : ${school[key]}`)
}
// output ===>
// name : Unizik
// location : Awka
// faculties : 9
// departments : 20
// founder : Nnamdi Azikiwe
// branches : 5
// viceChancellor : Gibson Nwosu
