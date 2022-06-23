let user1={
    firstName : "Bilgin",
    lastName : "Uzman",
    score:[1,2,3,4],
    isActive1 : true,
    shortName:function(){
        return `${this.firstName[0].toUpperCase()}.${this.lastName}`
    }
};
console.log();

//Object Destructuring:
// let settings = {
//     userName: "loremIpsum",
//     //password: "Badpassword",
//     isActive1: false,
//     ip :"127.0.0.1",
//     serverName :"kodluyoruz.org",
// }

let userName = settings.userName
console.log(userName);
let {userName :user ,isActive1,ip:serverIp,serverName} = settings
console.log(settings);
console.log(user);
console.log(serverIp);

//remove out 
let {userName: userName2, isActive1: isActive2, ...newSettings} =settings

console.log(userName2,  isActive2, newSettings);
console.log(settings);
