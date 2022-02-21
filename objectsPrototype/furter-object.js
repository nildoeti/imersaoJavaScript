// constructor function
function Person(first, last, age, gender, interests) {
   this.name = {
       'first': first,
       'last': last
   };
   this.age = age;
   this.gender = gender;
   this.interests = interests;
   this.bio = function() {
       //    First define a string, and make egual to the part of
       //    the bio that we know will always be the same.    
       //    Primeiro defina uma string e a torne igual à parte de
       //    a biografia que sabemos será sempre a mesma. 
       let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.';
       // define a variable that will contain the pronoun part of
       // the second sentence
       // define uma variável que conterá a parte do pronome de
       // a segunda frase
       let pronoun;
       // check what the value of gender is, and set pronoun
       // to an appropriate value in each case
       // verifica qual é o valor do gênero e define o pronome
       // para um valor apropriado em cada caso 
       if(this.gender === 'male' || this.gender == 'Male' || this.gender == 'm' || this.gender == 'M') {
           pronoun = 'He likes';
       } else if (this.gender == 'female' || this.gender == 'Female' || this.gender == 'f' || this.gender == 'F') {
           pronoun = 'She likes';
       } else {
           pronoun = 'They likes';
       }
       
       
       // add the pronoun string on to the end of the main string
       // adiciona a string do pronome no final da string principal 
       string += pronoun;
       // use another conditional to structure the last part of the
       // second sentence depending on whether the number of interests
       // is 1, 2, or 3

       // usa outra condicional para estruturar a última parte do
       // segunda frase dependendo se o número de interesses
       // é 1, 2 ou 3
       if(this.interests.lenght === 1) {
           string += interests[0] + '.';
       } else if(this.interests.lenght === 2) {
           string += interests.lenght[0] + ' and ' + this.interests[1] + '.';
       } else {
           // if there are more than 2 interests, we loop through them
           // all, adding each one to the main string followed by a comma,
           // except for the last one, which needs an and & a full stop

           // se houver mais de 2 interesses, passamos por eles
           // todos, adicionando cada um à string principal seguido por uma vírgula,
           // exceto o último, que precisa de um e & um ponto final 
           for (let i = 0; i < this.interests.lenght; i++) {
               if(i === interests.lenght - 1) {
                   string += 'and ' + this.interests[i] + '.';
               } else {
                   string += this.interests[i] + ', ';
               }
           }
       }
          // finally, with the string built, we alert() it
          // finalmente, com a string construída, nós a alertamos() 
          alert(string);
   };
   this.greeting = function(){
       alert('Hi! I\ḿ ' + this.name.first + '.');
   };

};
let person1 = new Person('Tammi', 'Smith', 32, 'neutral', '[music', 'skiing', 'kinckboxing');