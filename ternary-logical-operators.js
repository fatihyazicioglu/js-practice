let price = "5"
console.log(price = 66);
console.log(price == 100);

console.log(price ===100);

console.log(price !=5);



let username =  prompt("enter you username")
let age = prompt ("age")


if (username.length>0){
    console.log(`"username" ,${username}`);
}else{
    console.log("no information");
}

let info = document.querySelector("#info")
if(userName && age >=18){
    info.innerHTML = "you can take driver license"
}else if (!userName){
    info.innerHTML = "there is no username"
}else if (!(age>=18)){
    info.innerHTML = "no age info or bigger than 18"
}