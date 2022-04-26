const empty = {} // objeto em propriedade
const point = {x:0, y:0} // objeto com duas propriedades
const point2 = {x:point.x, y:point.y + 1} // objeto com duas propriedades mais complexas

const book = {
    'main title': 'JavaScript', // nome da proproedade pode usar espaços
    'sub-title': 'The definitive guide', // e podem usar hífens
    'for': 'all audiences', // for é uma palavra reservada, mas entre aspas

    author: { // valor da propriedade como objeto e sem aspas
        firstname: 'David',
        surname: 'Flanagan'
    }
}


