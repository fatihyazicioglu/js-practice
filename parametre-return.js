let firstNameK = "lorem"

function greetings(){
    // console.log(`Merhaba ${firstName ? firstName : ""}`);
    console.log(`Merhaba ${firstNameK}`);
}
greetings()

let info123 = greetings ("parametre")
console.log(info123);

greetings ("Parametre")

function greeting2 (firstNameK, lastName){
    let info123 = `${firstNameK} ${lastName}`
    return info123
}
// function greeting2 (firstName, lastName){
// greeting2 ("Ad", "Soyad")
// let info = "deneme" //???????
// console.log(info);


function domIdWriteInfo(id,info123) {
    let dom0bject = document.querySelector ( `#${id}`)
    dom0bject.innerHTML = info123
}

