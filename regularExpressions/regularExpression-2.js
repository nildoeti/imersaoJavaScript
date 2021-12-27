let text = 'Hello World';

// look for 'hello'
let pattern1 = /hello/g;
let result = pattern1.test(text);

// look for 'W3Schools'
let pattern2 = 'W3Schools';
let result2 = pattern2.test(text);

document.getElementById('demo').innerHTML = result1 + '<br>' + result2;