let firstName = "lorem"

function greetings(){
    // console.log(`Merhaba ${firstName ? firstName : ""}`);
    console.log(`Merhaba ${firstName}`);
}
greetings()

let info = greetings ("parametre")
console.log(info);

greetings ("Parametre")

function greeting2 (firstName, lastName){
    let info = `${firstName} ${lastName}`
    return info
}
function greeting2 (firstName, lastName){
greeting2 ("Ad", "Soyad")
let info = "deneme" //???????
console.log(info);