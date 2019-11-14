const btnAdd = document.querySelector(".btn-add");
const alin = document.querySelector("#alinhamento"); 

btnAdd.addEventListener("click", event => {
    event.preventDefault();

    const fields = [...document.querySelectorAll("form input")];

    fields.forEach(field => {
        if (field.value == "") alin.classList.add("validate-error");
    });

    const formError = document.querySelector(".validate-error");

    if (formError) {
        formError.addEventListener("animationend", (event) => {
            if (event.animationName == "nono") {
                formError.classList.remove("validate-error");
            }
        });
    } else {
        btnAdd.onclick = addTodo;
    }
});
//esse é o final do verificador 


//aqui começa os codigos de adicionar os li
var inputElement = document.querySelector("form input");
var listElement = document.querySelector(".list ul");

var todos = [
    'Fazer café',
    'estudar JS',
    'tomar cafe'
];

function renderTodos() {
    listElement.innerHTML = '';

    for(todo of todos) {
        var todoElement  = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        var linkImg = document.createElement('img');



        linkElement.appendChild(linkImg);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
    renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos(); 
}



