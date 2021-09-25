let nome = prompt('Digite seu nome: ');

window.document.body.innerHTML += `Seu nome é: <strong>${nome}</strong> <br />`;
window.document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> caracteres.<br />`;
window.document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br />`;
window.document.body.innerHTML += `Qual o primeiro índice da letra "a" do seu nome: <strong>${nome.indexOf('a')}</strong> <br />`;
window.document.body.innerHTML += `Qual o ultimo índice da letra do seu nome: <strong>${nome.lastIndexOf('a')}</strong> <br />`;
window.document.body.innerHTML += `As ultimas 3 letras do seu nome são: <strong>${nome.slice(-3, nome.length)}</strong> <br />`;
window.document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br />`;
window.document.body.innerHTML += `Seu nome com letras maúsculas: </strong>${nome.toUpperCase()}</strong> <br />`;
window.document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong> <br />`;
