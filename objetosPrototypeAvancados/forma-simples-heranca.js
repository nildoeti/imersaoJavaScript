class Mammal {
    constructor (species, name, age) { // parâmetros da função construtura

        // informar (setar), as propriedades para a construção do objeto
        this.species = species // propriedade global
        this.name = name // propriedade global
        this.age = age // propriedade globa
        this.mammaryGland = true // propriedade local (caracteristica de glandula mamária)
    }

    // método que incremente a idade do mamifero
    incrementAge () {
        this.age++
    }
}
// criar uma classe Lion(), que herde todas as propriedades da class Mammal e
// que a classe Lion tenha propriedades e métodos que sejam únicos dela
class Lion extends Mammal { // extends, define que a classe Lion seja filha da classe Mammal
    constructor (species, name, age, manEater) {
        // invocando o construtor 
        super (species, name, age)
        this.manEater = manEater
    }

    eatZebras (animals) {
        // propriedades e métodos exclusivos da classe Lion
        return animals.filter(animals => animals.species !== 'zebra') // filtrar todos os animais que 
                                                                        // não sejam zebras
    }

}

// criando um objet a partir da classe Mammal
const zeca = new Mammal('zebra', 'Zeca', 6) // invocação de new Mammal
const pompeu = new Mammal('gnu', 'Pompeu', 5) // invocação de new Mammal
const angus = new Mammal('cavalo', 'Angus', 3) // invocação de new Mammal

// comprovando que Lion herdou as propriedades de Mammal
const mufasa = new Lion('leão', 'Mufasa', 7, false)

// comprovando 
const animals = [zeca, pompeu, angus] // 

// invocando método age
// zeca.incrementAge()
console.log(zeca); // Mammal { species: 'zebra', name: 'Zeca', age: 6, mammaryGland: true }
console.log(pompeu); // Mammal { species: 'gnu', name: 'Pompeu', age: 5, mammaryGland: true }
console.log(angus); // Mammal { species: 'cavalo', name: 'Angus', age: 3, mammaryGland: true }
console.log(mufasa); // Lion { species: 'leão', name: 'Mufasa', age: 7, mammaryGland: true }
console.log(mufasa.eatZebras(animals));
/*
    Saida para: mufasa.eatZebras(animals
    0: Object { species: "gnu", name: "Pompeu", age: 5, … 
    1: Object { species: "cavalo", name: "Angus", age: 3, … }

*/

// comprovando que a nova classe pompeu, não herdou os mpetodos de eatZebras
console.log(mufasa); // TypeError: pompeu.eatZebras is not a function

