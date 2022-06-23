let users = ["lorem", "Ipsum","Dolor"]


for (let i = 0; i<10 ; i++){
    console.log(i);
}

let index = 0
for (; index <users.length; index++) {
    console.log(users[index]);
}


let counterY = 0
for(; counterY<10; counterY++){
    if (counterY ===5){continue}
    console.log(counterY);
}


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

let counter1 = 0
for(; counter1<10; counter1++){
    if (counter1 ===5){break}
    console.log(counter1);
}
