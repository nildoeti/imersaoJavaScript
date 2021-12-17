// AND logical (&&)
console.log(true && true); // return true
console.log(true && false); // return false
console.log(false && true); // return false
console.log(false && (3 == 4)); // return false
console.log('cat' && 'dog'); // return dog 
console.log(false && 'cat'); // return false
console.log('cat' && false); // return false

console.log('...continue');

// OR logical (||)
console.log(true || true); // return true
console.log(true || false); // return true
console.log(false || true); // return true
console.log(false || (3 == 4)); // fale
console.log('cat' || 'dog'); // return cat
console.log(false || 'cat'); // retunr cat
console.log('cat' || false); // return cat 

// NOT logical (!)
var num = 4;
console.log(3 == !true); // return false
console.log(2 == !true); // return false
console.log(2 == !false); // return false
console.log(num != false); // return true
console.log(num !== true); // return true
