const toDoOpenBtn = document.querySelector("#todo > p");
const toDoBox = document.querySelector(".todo-box");

const toDoStartBox = document.querySelector(".todo-start");
const newToDoBtn = toDoStartBox.querySelector("button");

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

toDoOpenBtn.addEventListener("click", handleToDoBox);
newToDoBtn.addEventListener("click", addNewToDo);


function handleToDoBox() {
    toDoOpenBtn.classList.toggle("active");
    toDoBox.classList.toggle("open");

    if (toDoBox.classList.contains("open")) {
        toDoOpenBtn.addEventListener("click", () => {
            if (toDos.length < 1) {
                newToDoBtn.classList.remove("off");
                toDoForm.classList.add("blind");
            } else {
                toDoForm.classList.remove("blind");
            } 
        });
    }

    
}

function addNewToDo() {
    newToDoBtn.classList.add("off");
    toDoForm.classList.remove("blind");
    toDoInput.focus(); 
}


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter( (todo) => todo.id !== parseInt(li.id) );
    saveToDos();

    /** 저장된 todo list 가 없을 떄 화면 초기화 */
    if (toDos.length < 1) {
        toDoStartBox.classList.remove("hidden");
        newToDoBtn.classList.remove("off");
        toDoForm.classList.add("blind");
    }
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
  
    span.innerText = newTodo.text;
    button.innerText = "❌"

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

    button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(e) {
    e.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    
    toDoStartBox.classList.add("hidden");

    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


/** 저장된 todo list 불러오기 */
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {

    toDoStartBox.classList.add("hidden");
    toDoForm.classList.remove("blind");

    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos;
    console.log(parsedTodos);
    parsedTodos.forEach(paintToDo);

    /** 저장된 todo list 가 없다면 */
    if (parsedTodos.length < 1) {
        toDoStartBox.classList.remove("hidden");
        toDoForm.classList.add("blind");
    }
} 


