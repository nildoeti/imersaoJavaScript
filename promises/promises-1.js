/*
    Require
    É a maneira mais fácil de incluir módulos que existem em arquivos separados. 
    A funcionalidade básica do require é que ele lê um arquivo JavaScript, 
    executa o arquivo e, em seguida, retorna o objeto de exportação. Um módulo 
    de exemplo: 

    Fonte: NODEJS url(https://nodejs.org/en/knowledge/getting-started/what-is-require/)
*/

const fs = require('fs');
const path = require('path');
const basePath = './assets/'

// exemplo 1 para promises
// const content = fs.readFileSync(path.resolve(basePath, 'poema1.txt'));

// console.log(content.toString());

const files = fs.readdirSync(path.resolve(basePath));
const sentences = files.filter((file) => /s[1-4].txt/gi.test(file));

for (const sentence of   sentences) {
    const text = fs.readFileSync(path.resolve(basePath, sentence)).toString();
    console.log(text);
}