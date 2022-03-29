let item = document.querySelector("ul#list>li:first-child")
console.log(item);

let ulDOM = document.querySelector ("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi olusturdugumuz oge"

ulDOM.append(liDOM) // adds to the last
ulDOM.prepend(liDOM) //add to the beginning