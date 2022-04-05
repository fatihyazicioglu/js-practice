let firstName = "lorem"

function greetings(){
    // console.log(`Merhaba ${firstName ? firstName : ""}`);
    console.log(`Merhaba ${firstName}`);
}
greetings()

let info = greetings ("parametre")
console.log(info);