let priceZ = 100
let tax = 0.18
let priceTax = priceZ * tax
let total = priceZ + priceTax
console.log(
     "price:", priceZ,
     "tax:" , tax,
     "pricetax:", priceTax,
    "total:" , total
)

//increase and decrease
let counterA = 320
counterA = counterA + 1 ;
counterA += 1;
counterA ++;
console.log( counterA)

counterA -= 1;
counterA --;
console.log( counterA)

counterA *= 10;
console.log( counterA)

counterA /= 5;
console.log( counterA)

console.log (2 + 3 * 50)
// console.log( counter)
console.log ((2 + 3 )* 50)


// mod alma
console.log (14 % 2) //0 ise cift, 1 ise tek
console.log (17 % 2)

//8 urun alan koliye tum urunler sigiyor mu?
console.log("Koli Ornegi: ", 18 % 8)
