function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
/*
	size12, size14 e size16 agora são funções que devem redimensionar o texto 
	do elemento body para 12, 14 e 16 pixels respectivamente. Nós podemos 
	designá-las a botões (neste caso, links) como feito a seguir:
*/
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
