let arrayObj =[1,2,3]
let object1 = {obj: 1}

console.log("arrayObj", typeof(arrayObj));
console.log("object1", typeof(object1));

let item1 = new Object()
let item2 = {}
console.log("item1", typeof(item1));
console.log("item2", typeof(item2));
//makein Object
let item3 ={}
let item4 = new Object()  

console.log("object1", 1);

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro", 
    "2kg": 2, //it is not allowed to begin with number-> 1number
}


console.log(laptop1);

console.log(laptop1.model);
console.log(laptop1["2kg"]);