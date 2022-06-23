const todos = [
    {title:"Todo 1",
     description:"go shopping"
    },
    {title:"Todo 2",
     description:"clean haus"
    },
    {title:"Todo 3",
     description:"call friend"
    },
]

let todoListEl =document.getElementById("todoList")

function todoList(){
    setTimeout(()=>{
        let todoItems ="";
        todos.forEach(item=>{
            todoItems += `
            <li>
            <b> ${item.title}</b>
            <p> ${item.description}</p>
            </li>
         `
            
        })
        todoListEl.innerHTML = todoItems;
    },4000)
}

//to add new Todo
function newTodo(todo, callback){
   setTimeout(()=>{
    todos.push(todo);
    callback()
   },2000);
}
newTodo({
    title:"Todo 4",
    description:"picnic"
},todoList);

//todoList()