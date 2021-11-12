const date = new Date('1999-01-28 00:00:00');

const day = date.getDay();
let dayWeek = 10;

// // situação com if/else
// if (dayWeek === 0) {
// 	dayWeek = 'sunday'
// } else if (dayWeek === 1) {
// 	dayWeek = 'monday';
// } else if (dayWeek == 2) {
// 	dayWeek = 'tuesday';
// } else if (dayWeek === 3) {
// 	dayWeek = 'Wednesday';
// } else if (dayWeek === 4) {
// 	dayWeek = 'thursday';
// } else if (dayWeek === 5) {
// 	dayWeek = 'friday';
// } else if{
// 	dayWeek = 'saturday';
// } else {
// 	dayWeek = '';
// }


// situação com switch/case
// switch(dayWeek) {
// 	case 0:
// 		dayWeek = 'Sunday';
// 		break;
// 	case 1:
// 		dayWeek = 'Monday';
// 		break;
// 	case 2:
// 		dayWeek = 'Tuesday';
// 		break;
// 	case 3:
// 		dayWeek = 'Wednesday';
// 		break;
// 	case 4:
// 		dayWeek = 'Thursday';
// 		break;
// 	case 5:
// 		dayWeek = 'Friday';
// 		break;
// 	case 6:
// 		dayWeek = 'Saturday';
// 		break;

// 	default:
// 		dayWeek = 'Invalid option.';
// }


// situação com uso de uma função

function dayWeek(days) {
	// body...
	const days;

	switch (days) {
		case 0:
			return days = 'Sunday';
		case 1:
			return days = 'Monday';
		case 2:
			return days = 'Tuesday';
		case 3:
			return days = 'Wednesday';
		case 4:
			return days = 'Thursday';
		case 5:
			return days = 'Friday';
		case = 6:
			return days = 'Saturday';
		default:
		days = '';
	}
}

const newDayWeek = dayWeek(days);
console.log(newDayWeek);
