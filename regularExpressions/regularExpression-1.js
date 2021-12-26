let text = "The best things in life are free";
let pattern = /e/;
let result = pattern.test(text);

document.getElementById("demo").innerHTML = result;