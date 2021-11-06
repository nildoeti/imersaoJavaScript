// ARRAY
// way of dealing with separate elements of the array 

// spread (...)
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [2, 4, 6];

const resultOne = sum(...numbers); // use of spread
console.log(resultOne);


// Rest: combine the arguments of an array
function checkSize(...args) {
    console.log(args.length);
}

console.log(checkSize()); // zero arguments
console.log(checkSize(3)) // one arguments
console.log(checkSize(1, 2)); // two arguments
console.log(checkSize(1, 2, 3, 4, 5, 6)); // six arguments


// objects destruturing
const user {
    id: 42, 
    displayName: 'joe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return ´${first} ${last}´;
}

userId(user); // 42
getFullName(user); // John Doe

