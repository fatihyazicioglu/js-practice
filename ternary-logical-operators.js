let priceB = "5"
console.log(priceB = 66);
console.log(priceB == 100);

console.log(priceB ===100);

console.log(priceB !=5);



let username =  prompt("enter you username")
let age = prompt ("age")


if (username.length>0){
    console.log(`"username" ,${username}`);
}else{
    console.log("no information");
}

let info = document.querySelector("#info")
if(username && age >=18){
    info.innerHTML = "you can take driver license"
}else if (!username){
    info.innerHTML = "there is no username"
}else if (!(age>=18)){
    info.innerHTML = "no age info or bigger than 18"
}