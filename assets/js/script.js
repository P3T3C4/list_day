
// Verificador do input

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

// Aqui começa o add 

let inputElement = document.querySelector("form input");
let listElement = document.querySelector(".list ul");

let todos = [
    'Fazer café',
    'estudar JS',
    'tomar cafe'
];


function renderTodos() {
    listElement.innerHTML = '';
    

    for(todo of todos) {
        let todoElement  = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');

        let linkImg = document.createElement('img');
        linkImg.setAttribute('src', 'assets/img/error.png'); 

        linkElement.appendChild(linkImg);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
    renderTodos();

function addTodo() {
    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    inputElement.innerHTML = '';
    renderTodos(); 
    
}
console.log('addTodo');



