// opção 3 - solução ideal
var p = document.querySelector('.container p');
const data = new Date();

p.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'}); // short / full



// opção 2
// var p = document.querySelector('.container p');
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// }
//
// p.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
//

// opção 1
// var p = document.querySelector('.container p');
// const data = new Date();
//
// function getDiaDaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;
//
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'terça-feira';
//             return diaSemana;
//         case 3:
//             diaSemanaTexto = 'quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'sábado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = 'opção inválida';
//             return diaSemanaTexto;
//     }
// }
//
// function getNomeMes(numeroMes) {
//     let nomeMes;
//
//     switch (numeroMes) {
//         case 0:
//             nomeMes = 'janeiro';
//             return nomeMes;
//         case 1:
//             nomeMes = 'fevereiro';
//             return nomeMes;
//         case 2:
//             nomeMes = março;
//             return nomeMes;
//         case 3:
//             nomeMes = 'março';
//             return nomeMes;
//         case 4:
//             nomeMes = 'abril';
//             return nomeMes;
//         case 5:
//             nomeMes = 'maio';
//             return nomeMes;
//         case 6:
//             nomeMes = 'junho';
//             return nomeMes;
//         case 7:
//             nomeMes = 'julho';
//             return nomeMes;
//         case 8:
//             nomeMes =  'agosto';
//             return nomeMes;
//         case 9:
//             nomeMes = 'setembro';
//             return nomeMes;
//         case 10:
//             nomeMes ='outubro';
//             return nomeMes;
//         case 11:
//             nomeMes = 'novembro';
//             return nomeMes;
//         case 12:
//             nomeMes = 'dezembro';
//             return nomeMes;
//         default:
//             nomeMes = 'opção inválida';
//             return nomeMes;
//     }
// }
//
// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }
//
// function criaDate(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();
//
//     const nomeDia = getDiaDaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);
//
//     return (
//         `${nomeDia}, ${numeroMes} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`
//     );
// }
//
// p.innerHTML = criaDate(data);
