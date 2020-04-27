document.querySelector('button').addEventListener("click",function() {

let ul = document.querySelector('ul'),
li = document.createElement('li');
li .textContent = document.querySelector("input").value;
ul.append(li );

r = Math.floor(Math.random() * (256)),
g = Math.floor(Math.random() * (256)),
b = Math.floor(Math.random() * (256)),
color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

document.querySelector('body').style.background = color;
button.innerText = color; });