/**
 * JAVASCRIPT não possui classes nativamente, mas protótipos de objetos e heranças
 *  
 * */
 * 

// construtor
 class animal {
 	constructor(type = 'animal') {
 		this.type = type
 	}

 	get type() {
 		return this_type
 	}

 	set type(val) {
 		this._type = val.upperCase()
 	}

 	makeSound() {
 		console.log(Making animal sound)
 	}
 }

 // super()
 class Cat extends animal {
 	constructor() {
 		super('cat')
 	}

 	makeSound() {
 		super.makeSound()
 		console.log('Meow')
 	}
 }

 let b = new Cat()
 console.log(b.type) // CAT
 