let user1={
    firstName : "Bilgin",
    lastName : "Uzman",
    score:[1,2,3,4],
    isActive : true,
    shortName:function(){
        return `${this.firstName[0].toUpperCase()}.${this.lastName}`
    }
};
console.log();

//Object Destructuring:
let settings = {
    userName: "loremIpsum",
    password: "Badpassword",
    isActive: false,
    ip :"127.0.0.1",
    serverName :"kodluyoruz.org",
}

let userName = settings.userName
console.log(userName);
let {userName :user ,password,isActive,ip:serverIp,serverName} = settings
console.log(settings);
console.log(user);
console.log(serverIp);

//remove out 
let {userName: userName2,password: password2, isActive: isActive2, ...newSettings} =settings

console.log(userName2, password2, isActive2, newSettings);
console.log(settings);
