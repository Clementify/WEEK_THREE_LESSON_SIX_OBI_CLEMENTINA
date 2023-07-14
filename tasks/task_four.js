
//   Remove properties from an object
// Create an object with multiple properties.
// Use the delete keyword to remove a specific property from the object.
// Log the object to the console to see the updated properties.

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
delete school.faculties
delete school.departments

console.log(school);

//output ===
// {
//     name: 'Unizik',
//     location: 'Awka',
//     founder: 'Nnamdi Azikiwe',
//     branches: 5,
//     viceChancellor: 'Gibson Nwosu'
//   }