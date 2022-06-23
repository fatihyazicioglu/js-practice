// let item = document.querySelector("ul#list>li:first-child")
// console.log(item);

// let ulDOM = document.querySelector ("ul#list")
// let liDOM = document.createElement('li')

// liDOM.innerHTML = "Kendi olusturdugumuz oge"

// ulDOM.append(liDOM) // adds to the last
// ulDOM.prepend(liDOM) //add to the beginning

let items1 = [10, 20 , 30, 40]
console.log("items- ilk hali ;", items1);

// console.log(items.push(50));
items1.push (50)
console.log("50: ", items1);


// array :basa oge eklemek
items1.unshift (5)
console.log("5: ",items1);


// sondaki ogeyi cikartmak -> Pop
let lastItem = items1.pop ()
console.log("last item; ", lastItem,"items: ", items);

let firstItem = items1.shift ()//ilk eleman
console.log(firstItem);


items1[0] = 5
console.log(items1);


items1[items1.length -1] = 1000


console.log(items1);


items1[10000] = 10000
console.log(items1); //to see empty items