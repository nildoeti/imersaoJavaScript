/**
 * Object_prototypes
 * Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns 
 * dos outros. Neste artigo, explicamos como as cadeias de protótipos funcionam 
 * e observamos como a propriedade prototype pode ser usada para adicionar 
 * métodos aos construtores existentes.
 * 
 * Fonte MDN url(https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes)
 */

// um objeto
function Person(first, last, age, gender, interests) {
    
    // definição de propriedade e métodos
    this.name = {
        'first': first,
        'last': last
    },

    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        // Primeiro defina uma string e a torne igual à parte de
        // a biografia (bio), que sabemos será sempre a mesma.
        let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
        // define uma variável que conterá a parte do pronome de
        // a segunda frase
        let pronoun;

        // check what the value of gender is, and set pronoun
        // to an appropriate value in each case
        if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
            pronoun = 'He likes ';
        } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
            pronoun = 'She likes ';
        } else {
            pronoun = 'They like ';
        }

        // adiciona a string do pronome no final da string principal
        string += pronoun;

        // usa outra condicional para estruturar a última parte do
        // segunda frase dependendo se o número de interesses
        // é 1, 2 ou 3
        if (this.interests.length === 1) {
            string += this.interests[0] + '.';
        } else if (this.interests.length === 2) {
            string += this.interests[0] + ' and ' + this.interests[1] + '.';
        } else {
            // se houver mais de 2 interesses, passamos por eles
            // todos, adicionando cada um à string principal seguido por uma vírgula,
            // exceto o último, que precisa de um e & um ponto final
            for (var i = 0; i < this.interests.length; i++) {
                if (i === this.interests.length - 1) {
                    string += 'and ' + this.interests[i] + '.';
                } else {
                    string += this.interests[i] + ', ';
                }
            }
        }

        // finalmente, com a string construída, nós a alertamos()
        alert(string);
    };
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name.first + '.');
        
    };

};

// Nós criamos então uma instância de objeto como esta:
let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);