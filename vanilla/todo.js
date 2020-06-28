var app = document.querySelector("div#app");

var todolist = JSON.parse(localStorage.getItem("todoList")) || [];

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

function drawList() {
  var ul = document.querySelector("div#app ul");
  ul.innerHTML = "";

  for (todo of todolist) {
    var pos = todolist.indexOf(todo);
    var done = todo.done || false;

    var removeLink = createElement("a", "Excluir");
    removeLink.setAttribute("href", "#");
    removeLink.setAttribute("onclick", "delItem(" + pos + ")");
    removeLink.classList.add("itemlink");

    var doneLink = createElement("a", done ? "Undone" : "Done");
    doneLink.setAttribute("href", "#");
    doneLink.setAttribute("onclick", `markItem(${!done}, ${pos})`);
    doneLink.classList.add("itemlink");

    var text = todo.name;
    if (done) {
      text = createElement("strike", text);
    }
    var item = createElement("li", text);

    item.appendChild(removeLink);
    item.appendChild(doneLink);

    ul.appendChild(item);
  }
}

function saveLocal() {
  localStorage.setItem("todoList", JSON.stringify(todolist));
}

function addItem() {
  var newItem = document.querySelector("input[name=newitem]").value;
  document.querySelector("input[name=newitem]").value = "";
  todolist.push({ name: newItem });
  drawList();
  saveLocal();
}

function delItem(pos) {
  todolist.splice(pos, 1);
  drawList();
  saveLocal();
}

function markItem(done, pos) {
  todolist[pos].done = done;
  drawList();
  saveLocal();
}

document.querySelector("#app button#add").onclick = addItem;
drawList();
