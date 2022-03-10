const pets = [ // um array com uma lista de objetos 
{
    name: 'rex',
    type: 'dog',
    age: 10,
    weight: 0.22
},
{
    name: 'Tatus',
    type: 'dog',
    age: 4,
    weight: 1.5
},
{
    name: 'bolinha',
    type: 'cat',
    age: 2,
    weight: 1
},
{
    name: 'gup',
    type: 'fish',
    age: 1,
    weight: 0.01
},
{
    type: 'horse',
    name: 'pé de pano',
    age: 1,
    weight: 0.01
}
];

// soma dos Weght dos pets
// let totalWeight = pets.reduce( (total, pet) => {
//     return total + pet.weight;
// }, 0);

// console.log(totalWeight); // 1.24


// total para dogs
// let dog = pets.filter( (pet) => {
//     return pet.type === 'dog';
// });

// console.log(dog); 
// /*
//     Saida para dog
//     { name: 'rex', type: 'dog', age: 10, weight: 0.22},
//     { name: 'Tatus', type: 'dog', age: 4, weight: 1.5 }
// */ 

// let totalWightDogs = pets.reduce( (total, dog) => {
//     return total + dog.weight;
// }, 0);

// console.log('Total da alturas dos dogs: ', totalWightDogs); // Total da alturas dos dogs:  2.7399999999999993


// filter e reduce encadeados
let totalWeightDogs = pets.filter( (pet) => {
    return pet.type === 'dog';
}).reduce( (total, pet) => {
    return total + pet.weight;
}, 0);

console.log(totalWeightDogs); // 1.72