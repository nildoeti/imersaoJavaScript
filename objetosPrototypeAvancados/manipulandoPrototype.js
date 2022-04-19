// // Manipulando prototype
const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

// criando novo objeto
const objC = new Object();
objC.chaveC = 'C';



Object.setPrototypeOf(objB, objA); // objB herda o proto de objA
Object.setPrototypeOf(objC, objB) // objC herda o proto de objB

/*
    Saida para os exemplos acima, pelo console do navegador
    
    objC
    Object { chaveC: "C" }
    ​
    chaveC: "C"
    ​
    <prototype>: Object { chaveB: "B" }
    ​​
    chaveB: "B"
    ​​
    <prototype>: Object { chaveA: "A" }
    ​​​
    chaveA: "A"
    ​​​
    <prototype>: Object { … }
*/