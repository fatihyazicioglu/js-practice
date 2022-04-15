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

let newItems = items.splice(1,6)
// console.log(items);
console.log(newItems);

