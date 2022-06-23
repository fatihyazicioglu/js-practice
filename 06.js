let number2 = "11px"
number2 = parseInt(number2)
console.log( "number2: ", number2, typeof(number2));


let number4 = "11.1px"
number4 = parseInt(number4)
console.log( "number5: ", number4, typeof(number4));





let number5 = 55
number5 = number5.toString()
console.log( number5, typeof(number5));

let itemsX = [1,2,3,4]

let femaleUsers = ["ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]
itemsX.unshift (femaleUsers) //adding to the beginning
itemsX.push(maleUsers)
console.log(itemsX);


console.log(itemsX[0].length);

//splice

let newItems = itemsX.splice(0,3)
// console.log(items);
console.log(newItems);

// indexOf
itemsX.unshift("lorem")
itemsX.push("ipsum")
console.log(itemsX);


// slice
let copyItems = itemsX
copyItems.pop()
console.log(copyItems); 
//pop to remove last element out of array

console.log(copyItems);
console.log(items);


let allUsers = [...femaleUsers, ...maleUsers]
console.log(allUsers);

// to convert to string -> toString, join
console.log(allUsers.toString());

//join
console.log(allUsers.join("*+*+*"));