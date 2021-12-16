// example 1
// function fn() {
// 	return 'Code here';
// }

// console.log(fn());

// example 2
// const arrowFn1 = () => 'Code here';
// console.log(arrowFn1());

// // example 3
// const arrowFn2 = () => {
// 	return 'Code here';
// }

// console.log(arrowFn2());


// functions are also objects
// fn.prop = 'I can also create objects';
// console.log(fn.prop)

// receive parameters 
// const logValue = value => console.log(value);
// const logFnResult = fnParam => console.log(fnParam);

// logFnResult(fn);

// receibe and return function
// const controlFnExec => fnParam => allowed => {
// 	if (allowed) {
// 		fnParam();
// 	}
// }

// const handleFnExecution = controlFnExec(fn);
// handleFnExecution(true); // execute function
// handleFnExecution(); // not execute function


// controlFnExec with function
// function controlFnExec(fnParam) {
// 	return function(allowed) {
// 		if (allowed) {
// 			fnParam();
// 		}
// 	}
// }

// 
// global.name = 'name in the context in function';
// this.name = 'name in the context in function';
(() => {
	this.name = 'arrow function'
	const getNameArrowFn = () => this.name; // name not exist

	function getName() {
		return this.name;
	}

	const user = {
		name: 'Name in the object of execution',
		getNameArrowFn,
		getName
	}

	console.log(user.getNameArrowFn());
	console.log(user.getName()); 
})() 

