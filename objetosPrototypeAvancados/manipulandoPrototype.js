// Manipulando prototype
//

const objA = {
	chaveA: 'A'
}

const objB = {
	chaveB: 'B'
}

const objC = new Object();
objC.chaveC = 'C';



Object.setPrototypeOf(objB, objA); //  adicionado objA, como prototype de objB
Object.setPrototypeOf(objC, objB);


console.log(objB.chaveA);
console.log(objC.chaveC);