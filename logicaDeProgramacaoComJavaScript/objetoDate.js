// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;

// const data = new Date(0 + tresHoras + umDia);
// console.log(data.toString()); 


// const data = new Date(2021, 03, 20, 15, 30, 45); // aaaa, mm, dd, hh, mm, ss

// const data = new Date('2021-04-10T20:40:21.100');
// console.log(data.toString());

// const data = new Date();

// console.log(`Dia: ${data.getDate()}`);
// console.log(`Mês: ${data.getMonth()}`);
// console.log(`Ano: ${data.getFullYear()}`);
// console.log(`Hora: ${data.getHours()}`);
// console.log(`Minuto: ${data.getMinutes()}`);
// console.log(`Segundos: ${data.getSeconds()}`);
// console.log(`Milesegundos: ${data.getMilliseconds()}`);
// console.log(`Dia da semana: ${data.getDay()}`);
// console.log(`Data completa: ${data.toString()}`);

// const myDate = new Date();

// console.log(`Date: ${myDate.getDate()}`);
// console.log(`Month: ${myDate.getMonth() + 1}`);
// console.log(`Year: ${myDate.getFullYear()}`);
// console.log(`Hour: ${myDate.getHours()}`);
// console.log(`Minutes: ${myDate.getMinutes()}`);
// console.log(`Seconds: ${myDate.getSeconds()}`);
// console.log(`Milliseconds: ${myDate.getMilliseconds()}`);
// console.log(`Day of the week: ${myDate.getDay()}`);
// console.log(`Full date: ${myDate.toString()}`);

// console.log(`Current date: ${Date.now()}`); // milliseconds from the current date

// const myNewDate = new Date(1636541835813); // using milliseconds
// console.log(myNewDate); // current date


// function formatDate(myDate) {
// 	console.log(myDate);
// }

// const myDate = new Date();
// formatDate(myDate);


// declarando a função zeroLeft()
function zeroLeft(num) {
	// body...
	return num >= 10? num : `0${num}`
}


// declarando a função formatDate() seguido do parâmetro date
function formatDate(date) {
	// body...
	const day = zeroLeft(date.getDay());
	const month = zeroLeft(date.getMonth());
	const year = zeroLeft(date.getFullYear());
	const hour = zeroLeft(date.getHours());
	const minutes = zeroLeft(date.getMinutes());
	const seconds = zeroLeft(date.getSeconds());
	const milliseconds = zeroLeft(date.getMilliseconds());

	// retornando os valores das variáveis da função
	return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}:${milliseconds}`;
}

// declarando date e invocando a função formatDate()
const date = new Date();
const newDate = formatDate(date);
console.log(newDate);