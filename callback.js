// let merhaba = function (){
//     console.log("bu bir callback");
// }

//setTimeout(merhaba, 3000);


setTimeout(function(){
    console.log("bu bir anonymus callback");
},3000)


document.querySelector("#btn").addEventListener("click",function () {
    console.log("Butona Tiklandi");
})

console.log("naber");