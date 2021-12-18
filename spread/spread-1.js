// spreadlet  facilita a concatenação de arrays
let partes = ['ombro', 'cabeça'];
let musica = ['cabeça', ...partes, 'e', 'pés']; 

console.log(musica);

let coresClaras = ['branco', 'azul claro', 'verde água'];
let coresFortes = ['azul marinho', 'roxo', ...coresClaras];
let combinacaoDeCores = coresFortes;

console.log(combinacaoDeCores);


// spread com funções
fn = (x, y, z) => {}
let args = [0, 1, 2];
fn(...args); // spread...


