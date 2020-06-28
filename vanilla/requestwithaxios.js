var app = document.querySelector("div#app");
var input = document.querySelector("input[name=gituser]");
var button = document.querySelector("button#getuser");

var api_url = "https://api.github.com/users/";
var user = "sallesricardo";

function createElement(el, content = false) {
  var newElement = document.createElement(el);
  if (typeof content == "string") {
    var newContent = document.createTextNode(content);
    newElement.appendChild(newContent);
  } else if (typeof content == "object") {
    newElement.appendChild(content);
  }
  return newElement;
}

function newRequest() {
  var newUser = input.value;
  user = newUser;
  input.value = "";
  getUserdata();
}

function getUserdata() {
  axios
    .get(api_url + user)
    .then(function (response) {
      //console.log(response);
      app.innerHTML = "";
      var avatar = createElement("img");
      avatar.setAttribute("src", response.data.avatar_url);
      avatar.classList.add("avatar");
      app.appendChild(avatar);
      var name = createElement("h2", response.data.name || "No name");
      app.appendChild(name);
      var url = createElement("a", "Github");
      url.setAttribute("href", response.data.html_url);
      app.appendChild(url);
    })
    .catch(function (reject) {
      console.warn("Error" + reject);
    });
}

getUserdata();
button.setAttribute("onclick", "newRequest()");
