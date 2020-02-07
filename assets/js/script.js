


const btnAdd = document.querySelector(".btn-add");
const alin = document.querySelector("#alinhamento"); 
 
//evento de click 

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



let inputElement = document.querySelector("form input");
let listElement = document.querySelector(".list ul");

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//aqui cria o li  

function renderTodos() {
    listElement.innerHTML = '';
    

    for(todo of todos) {
        let todoElement  = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo(' + pos + ')');
        let linkImg = document.createElement('img');

        linkImg.setAttribute('src', 'assets/img/error.png'); 

        linkElement.appendChild(linkImg);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
    renderTodos();

// adicionar li (elementos)


function addTodo() {
    let todoText = inputElement.value;

     if(todoText === '') {
         
         return false;
     }
     else{

        todos.push(todoText);
        inputElement.value = '';
        inputElement.innerHTML = '';
        renderTodos();
        saveToStorage(); 

     }
}

//delete li (elementos)

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}


// salvar os li (elemento)

function saveToStorage() {
    localStorage.setItem("list_todos",JSON.stringify(todos));
}

// animações de quadrados no background

const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 21; i++) {

    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 120));
    
    const position = random(1, 99);

    const delay = random(5, 0.1);

    const duration = random(24, 12);
    
    li.style.height = `${size}px`;
    li.style.width = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;

    li.style.animationDuration = `${duration}s`;

    li.style.animationTimingFunction = `cubic-bazier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ulSquares.appendChild(li);
}

