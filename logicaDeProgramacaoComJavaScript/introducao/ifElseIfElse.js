/**
  CONDICIONAL SIMPLES
  Condicinal simples para tomar decisão de beber aguá
*/

const beberAgua = true;
if (beberAgua) {
  console.log('Ufa!\nTem aguá.\n');
}


/*
  CONDICIONAL COMPOSTA
  Condicinal composta  para tomar uma decisão de sair de carro se achar a chave.
  Se não ir a pé se a chave não for achada.
*/

const chaveCarro = false;

if (chaveCarro) {
  console.log('\nAchei a chave do carro.\nVou sair de carro.');
} else {
  console.log('\nNão achei a chave.\nVou á pé.');
}

/*
  HORAS:
  0-11:  Bom dia
  12-17: Boa tarde
  18-23: Boa noite
*/

/*
  CONDICIONA IF ELSE
  Concicional if-else para ajudar um relógio a tomar decisão de quando
  der bom dia, boa tarde, boa noite.
  */
const hora = 132;

if (hora >= 0 && hora <= 11) { // bloco if
  console.log('\nBom dia');
}else if (hora >= 12 && hora <= 17) { // bloco if
  console.log('\nBoa tarde.');
} else if (hora >= 18 && hora <- 23){ // bloco else if
  console.log('\nBoa noite.');
} else { // bloco if
  console.log(`\nLamento!
Não consigo identificar que horas são.\n`);
}
