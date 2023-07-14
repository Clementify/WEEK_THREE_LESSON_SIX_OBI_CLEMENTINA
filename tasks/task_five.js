
// Merge objects
// Create multiple objects with different properties.
// Use the Object.assign() method to merge the objects into a single object.
// Log the merged object to the console.


const schoolName =
{
    name:'Unizik'
}
const schoolFounder = 
 {
    founder: 'Nnamdi Azikiwe'
 }
 const schoolInfomation = Object.assign({},schoolName, schoolFounder);
console.log(schoolInfomation);

// OUTPUT ==={ name: 'Unizik', founder: 'Nnamdi Azikiwe' }