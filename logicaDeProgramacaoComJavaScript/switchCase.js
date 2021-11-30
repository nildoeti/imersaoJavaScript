const data = new Date(); // Aceita-se parâmetros entre aspas se desejar data diferente

let diaSemana = data.getDate(); // pega o dia da semana
diaSemana = 0;
console.log(`Dia atual: ${diaSemana}`);
let diaSemanaTexto;


// exemplo com função
function pegaDiaSemanaTexto(diaSemana) {
	switch (diaSemana) {
		case 0:
			diaSemanaTexto = 'Domingo';
			return diaSemanaTexto;
	}	
}

let diaSemana(pegaDiaSemanaTexto);

// exemplo com switc
// switch (diaSemana) {
// 	case 0:
// 		diaSemanaTexto = 'Domingo';
// 		break;
// 	case 1:
// 		diaSemanaTexto = 'Segunda-feira';
// 		break;
// 	case 2:
// 		diaSemanaTexto = 'Terça-feira';
// 		break;
// 	case 3:
// 		diaSemanaTexto = 'Quarta-feira';
// 		break;
// 	case 4:
// 		diaSemanaTexto = 'Quinta-feira';
// 		break;
// 	case 5:
// 		diaSemanaTexto = 'Sexta-feira';
// 		break;
// 	case 6:
// 		diaSemanaTexto = 'Sábado';
// 		break;
// 	default:
// 		diaSemanaTexto = 'Dia inválido.'
// 		break;
// }

// exemplo com if-else
// if (diaSemana === 0) {
// 	diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
// 	diaSemanaTexto = 'Segunda-feira';
// } else if (diaSemana === 2) {
// 	diaSemanaTexto = 'Terça-feira';
// } else if (diaSemana === 3) {
// 	diaSemanaTexto = 'Quarta-feira';
// } else if (diaSemana === 4) {
// 	diaSemanaTexto = 'Quinta-feira';
// } else if (diaSemana === 5) {
// 	diaSemanaTexto = 'Sexta-feita';
// } else if (diaSemana === 6) {
// 	diaSemanaTexto = 'Sábado';
// } else {
// 	diaSemanaTexto = 'Dia inválido';
// }



console.log(`${diaSemana} - ${diaSemanaTexto}`);