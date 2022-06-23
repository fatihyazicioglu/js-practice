
//run newTodo after todoList

const todos1 = [
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

let todoListEle =document.getElementById("todoList")

function todoList(){
    setTimeout(()=>{
        let todoItems ="";
        todos1.forEach(item=>{
            todoItems += `
            <li>
            <b> ${item.title}</b>
            <p> ${item.description}</p>
            </li>
         `
            
        })
        todoListEle.innerHTML = todoItems;
    },4000)
}

//to add new Todo
function newTodo(todo, ){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            todos1.push(todo);
            const e =true;

            if (!e) {
                resolve();
            } else {
                reject("an error occured...");
            }
           },2000);
    });
}

newTodo({
    title:"Todo 4",
    description:"go eating"
}).then(response =>{
    console.log("new list", response);
})
.catch(e=>{
    console.log(e);
})

//todoList()
const p1 = Promise.resolve("P1")
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("i am second Promise");
    },2000);
})

const p3 = 14021967;
const p4 = fetch("https://jsonplaceholder.typicode.com/").then(res=>res);

Promise.all([p1,p2,p3,p4]).then(promises=>{
    console.log("promises",promises);
})