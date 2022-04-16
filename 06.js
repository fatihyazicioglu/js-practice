let number2 = "11px"
number2 = parseInt(number2)
console.log( "number2: ", number2, typeof(number2));


let number4 = "11.1px"
number4 = parseInt(number4)
console.log( "number5: ", number4, typeof(number4));





let number5 = 55
number5 = number5.toString()
console.log( number5, typeof(number5));

let items = [1,2,3,4]

let femaleUsers = ["ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]
items.unshift (femaleUsers) //adding to the beginning
items.push(maleUsers)
console.log(items);


console.log(items[0].length);

//splice

let newItems = items.splice(0,3)
// console.log(items);
console.log(newItems);

// indexOf
items.unshift("lorem")
items.push("ipsum")
console.log(items);


// slice
let copyItems = items
copyItems.pop()
console.log(copyItems); 
//pop to remove last element out of array

console.log(copyItems);
console.log(items);


let allUsers = [...femaleUsers, ...maleUsers]
console.log(allUsers);

// to convert to string -> toString, join
console.log(allUsers.toString());

