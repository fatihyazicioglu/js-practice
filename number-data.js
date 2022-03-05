let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
     "price:", price,
     "tax:" , tax,
     "pricetax:", priceTax,
    "total:" , total
)

// increase and decrease
let counter = 320
counter = counter + 1 ;
counter += 1;
counter ++;
console.log( counter)

counter -= 1;
counter --;
console.log( counter)

counter *= 10;
console.log( counter)

counter /= 5;
console.log( counter)

console.log (2 + 3 * 50)
// console.log( counter)
console.log ((2 + 3 )* 50)


// mod alma
console.log (14 % 2) //0 ise cift, 1 ise tek
console.log (17 % 2)

//8 urun alan koliye tum urunler sigiyor mu?
console.log("Koli Ornegi: ", 18 % 8)