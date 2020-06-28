var test = document.createElement("h1");
var text = document.createTextNode("Hello World!");
test.appendChild(text);
var app = document.querySelector("#app");
app.appendChild(test);
