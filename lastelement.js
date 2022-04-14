// let item = document.querySelector("ul#list>li:first-child")
// console.log(item);

// let ulDOM = document.querySelector ("ul#list")
// let liDOM = document.createElement('li')

// liDOM.innerHTML = "Kendi olusturdugumuz oge"

// ulDOM.append(liDOM) // adds to the last
// ulDOM.prepend(liDOM) //add to the beginning

let items = [10, 20 , 30, 40]
console.log("items- ilk hali ;", items);

// console.log(items.push(50));
items.push (50)
console.log("50: ", items);


// array :basa oge eklemek
items.unshift (5)
console.log("5: ",items);


// sondaki ogeyi cikartmak -> Pop
let lastItem = items.pop ()
console.log("last item; ", lastItem,"items: ", items);

let firstItem = items.shift ()//ilk eleman
console.log(firstItem);


items[0] = 5
console.log(items);


items[items.length -1] = 1000


console.log(items);


items[10000] = 10000
console.log(items); //to see empty items