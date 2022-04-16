/*
    getter
    A sintaxe de get associa uma propriedade de um objeto a uma função que será
    chamada quando tal propriedade é acessada.
    
*/



// Definindo um getter em novos objetos em inicializadores de objetos
// O exemplo abaixo irá criar a pseudo-propriedade latest para o objeto obj, 
// que irá retornar o último item do array em log.
let log = 'teste';
var obj = {
    get lastest () { // lasted -> pseudo propriedade para o objeto obj
        if (log.length == 0) return undefined // testa se o tamanho de log é igual a 0
                                                // e retorna undefined
            return log[log.length - 1] // se não retornar o tamho de log - 1
    }
}

console.log(obj.lastest); // NOTA: A tentativa de atribuir um valor a lastest não irá alterá-la

